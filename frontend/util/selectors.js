export const getCurrentUsersChannels = (state) => {
  if (state.session.currentUser) {
    const user_id = state.session.currentUser;
    const user = state.entities.users[user_id];
    const channel_ids = user.joined_channel_ids;
    return channel_ids.map( (id) => {
      return state.entities.channels[id]
    })
  } else {
    return [];
  }
};

export const getCUsPubChannels = (state) => {
  return getCurrentUsersChannels(state).filter( (channel) => {
    return !channel.is_dm
  });
};

export const getCUsDMs = (state) => {
  return getCurrentUsersChannels(state).filter( (channel) => {
    return channel.is_dm
  });
}

export const getCurrentChannel = (state, ownProps) => {
  return state.entities.channels[Number(ownProps.match.params.channelId)]
}

export const getCUUsername = (state) => {
  return state.entities.users[state.session.currentUser].username
}

export const pullRandomChannel = (state) => {
  if (state.session.currentUser) {
    const channelIds = state.entities.users[state.session.currentUser].joined_channel_ids
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
export const getUsersInSearchBuffer = (state) => {
  return state.ui.search.map( (index) => {
    return state.entities.users[index];
  })
}

export const findGeneral = (state) => {
  let channels = Object.values(state.entities.channels)
  for (let i = 0; i < channels.length; i++) {
    let channel = channels[i];
    if (channel.title === 'general') {
      return channel.id;
    }
  }
}

export const getSelectedUsers = (state) => {
  return state.ui.selected.map( (id) => {
    return state.entities.users[id]
  })
}

export const getNamesOfSelectedUsers = (state) => {
  return state.ui.selected.map( (id) => {
    return state.entities.users[id].username
  }).join(', ')
}
