class Participation < ApplicationRecord
  belongs_to :member,
    class_name: 'User',
    foreign_key: :member_id

  belongs_to :channel,
    class_name: 'Channel',
    foreign_key: :channel_id
end
