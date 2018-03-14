import { receiveMessage } from '../actions/message_actions';
import { receiveParticipation, removeParticipation } from '../actions/user_actions';
import { receiveOtherUsersDM } from '../actions/channel_actions';

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

export const createUserSub = (id, dispatch) => {
  App['user' + id] = App.cable.subscriptions.create({channel:'UserChannel', user: id}, {
    connected: () => {

    },
    disconnected: () => {

    },
    received: (data) => {
      // if (JSON.parse(data['channel']).channel.creator_id !== id) {
      //   dispatch(receiveOtherUsersDM(JSON.parse(data['channel'])))
      // }
      dispatch(receiveOtherUsersDM(JSON.parse(data['channel'])))
      let channel = JSON.parse(data['channel']).channel
      if (!Boolean(App['room' + channel.id])) {
        createSubscription(channel, dispatch);
      }
    },
  });
}
