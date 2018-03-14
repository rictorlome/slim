class Participation < ApplicationRecord
  belongs_to :member,
    class_name: 'User',
    foreign_key: :member_id

  belongs_to :channel,
    class_name: 'Channel',
    inverse_of: :memberships,
    foreign_key: :channel_id

  after_destroy :check_channel_empty

  after_create_commit {
    ParticipationBroadcastJob.perform_later self unless self.channel.is_dm
  }
  before_destroy { UserleaveBroadcastJob.perform_later self }

  def check_channel_empty
    if self.channel.member_ids.empty?
      self.channel.destroy
    end
  end
end
