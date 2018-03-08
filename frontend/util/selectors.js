export const getCurrentUsersChannels = (state, isDm) => {
  if (state.session.currentUser) {
    const user_id = state.session.currentUser;
    const user = state.entities.users[user_id];
    const channel_ids = user.joined_channel_ids;
    return Object.values(state.entities.channels).filter( (channel) => {
      return channel_ids.includes(channel.id) && (isDm === channel.is_dm)
    })
  } else {
    return [];
  }
};

export const getCUsPubChannels = (state) => {
  return getCurrentUsersChannels(state,false);
};

export const getCUsDMs = (state) => {
  return getCurrentUsersChannels(state,true);
}

export const getCUUsername = (state) => {
  return state.entities.users[state.session.currentUser].username
}

export const pullRandomChannel = (state) => {
  if (state.session.currentUser) {
    const channelIds = state.entities.users[state.session.currentUser].joined_channel_ids
    debugger
    return channelIds[Math.floor(Math.random() * channelIds.length)]
  } else {
    return undefined;
  }
}

export const getChannelsInSearchBuffer = (state) => {
  return state.ui.search.map( (index) => {
    return state.entities.channels[index]; 
  })
}
