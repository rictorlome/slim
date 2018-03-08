import React from 'react';

import { ChannelRow } from './channel_row';

export const CategoryRow = (props) => {
  const channels = props.channels.map( (channel) => {
    return (<ChannelRow  key={channel.id} channel={channel} />)
  })
  return (
  <div>
    {props.type}
    {channels}
  </div>
  )
};
