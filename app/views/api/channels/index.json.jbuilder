@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title
  end
end
