//
//
// # <% Channel.all.each do |channel| %>
// # debugger
// # App['room' + <%=channel.id%>] = App.cable.subscriptions.create channel: "RoomChannel", room: <%= channel.id %>,
// #   connected: ->
// #     # Called when the subscription is ready for use on the server
// #
// #   disconnected: ->
// #     # Called when the subscription has been terminated by the server
// #
// #   received: (data) ->
// #     # Called when there's incoming data on the websocket for this channel
// #     dispatch(receiveMessage(JSON.parse(data['message'])))
// #
// #   speak:(message,channelId) ->
// #     @perform 'speak', body: message, channel_id:channelId
// # <% end %>

// import { receiveMessage } from '../../../frontend/actions/message_actions';
