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

  after_create :join_created_channel

  def join_created_channel
    Participation.create!(member_id: self.creator_id, channel_id: self.id)
  end

end
