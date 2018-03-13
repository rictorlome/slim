class Channel < ApplicationRecord
  validates :is_dm, inclusion: [true, false]
  validates :title, presence: true, uniqueness: true

  belongs_to :creator,
    class_name: 'User',
    foreign_key: :creator_id

  has_many :memberships,
    class_name: 'Participation',
    foreign_key: :channel_id,
    inverse_of: :channel,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :member

  has_many :messages

  after_create :join_created_channel
  after_create_commit :run_broadcast_job, if: :is_dm?

  def join_created_channel
    Participation.create!(member_id: self.creator_id, channel_id: self.id)
  end

  def run_broadcast_job
    NewDMBroadcastJob.perform_later self
  end

  def is_dm?
    self.is_dm
  end

end
