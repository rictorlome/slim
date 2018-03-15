import isEqual from 'lodash';

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

export const getCurrentChannelsCount = (state, ownProps) => {
  return getCurrentChannel(state,ownProps).member_ids.length
}

export const getCurrentChannelsMessages = (state, ownProps) => {
  return Object.values(state.entities.messages).filter( (message ) => {
    return message.channel_id === Number(ownProps.match.params.channelId)
  })
}

export const getCUUsername = (state) => {
  return state.entities.users[state.session.currentUser].username
}

export const getDMTitleWithoutCU = (state, channelId) => {
  let title = state.entities.channels[channelId].title;
  let arr_of_names = title.split(', ');
  let index = arr_of_names.indexOf(getCUUsername(state));
  if (index !== -1) arr_of_names.splice(index, 1).join(', ');
  return arr_of_names;
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

export const selectedUsersInDm = (state) => {
  let channels = Object.values(state.entities.channels)
  for (let i = 0; i < channels.length; i++) {
    let channel = channels[i]
    if (!channel.is_dm) continue;
    let channel_title_array = channel.title.split(', ').sort();
    let selected_user_ids_array = state.ui.selected.concat(state.session.currentUser);
    let selected_user_array = selected_user_ids_array.map( (id) => state.entities.users[id].username ).sort();
    if (_.isEqual(channel_title_array, selected_user_array)) {
      return channel;
    }
  }
  return -1;
}

export const isCUAMember = (state, channel) => {
  return state.entities.channels[channel.id].member_ids.includes(state.session.currentUser);
}

export const getChannelsMessagesDays = (state, channel) => {
  let days = [];
  let prevDate;
  for (let i = 0; i < channel.message_ids.length; i++) {
    let message = state.entities.messages[channel.message_ids[i]];
    let d = new Date(message.created_at);
    let date = d.getDate();
    if (prevDate === date) {
      prevDate = date;
      continue;
    }
    days.push(d);
    prevDate = date;
  }
  return days;
}
