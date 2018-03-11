App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    dispatch(receiveMessage(JSON.parse(data['message'])))

  speak:(message,channelId, userId) ->
    @perform 'speak', body: message, channel_id:channelId, author_id: userId
