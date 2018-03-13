import { receiveMessage } from '../actions/message_actions';
import { receiveParticipation, removeParticipation } from '../actions/user_actions';

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
      debugger
      if (data['message']) {
        dispatch(receiveMessage(JSON.parse(data['message'])))
      } else if (data['participation']) {
        dispatch(receiveParticipation(JSON.parse(data['participation'])))
      } else if (data['userleave']) {
        dispatch(removeParticipation(JSON.parse(data['userleave'])))
      }
    },
    speak: function(message,channelId,userId) {
      return this.perform('speak', {
        body: message,
        channel_id: channelId,
        author_id: userId
      })
    },

  });
}
