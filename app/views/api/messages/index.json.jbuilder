@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :channel_id, :author_id, :body
  end
end
