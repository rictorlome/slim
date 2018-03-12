import { receiveMessage } from '../actions/message_actions';

export const createSubscriptions = (channels, dispatch) => {
  channels.forEach( (channel) => {
    createSubscription(channel,dispatch)
  })
}

export const createSubscription = (channel, dispatch) => {
  App['room' + channel.id]= App.cable.subscriptions.create({channel:'RoomChannel', room: channel.id}, {
    connected: () => {

    },
    disconnected: () => {

    },
    received: (data) => {
      dispatch(receiveMessage(JSON.parse(data['message'])))
    },
    speak: function(message,channelId,userId) {
      return this.perform('speak', {
        body: message,
        channel_id: channelId,
        author_id: userId
      })
    }
  });
}
