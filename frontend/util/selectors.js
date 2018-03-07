export const getCurrentUsersChannels = (state, isDm) => {
  debugger
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
