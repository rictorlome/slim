@messages.each do |message|
  json.messages do
    json.set! message.id do
      json.extract! message, :id, :channel_id, :author_id, :body, :created_at
    end
  end
  json.users do
    json.set! message.author_id do
      json.extract! message.author, :id, :username
      json.image_url asset_path(message.author.image.url(:original))
    end
  end
end
