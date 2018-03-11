class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :channel,
    class_name: 'Channel',
    foreign_key: :channel_id

  after_create_commit { MessageBroadcastJob.perform_later self }  
end
