import React from 'react';

import { SearchedChannelItem } from './searched_channel_item';


export const ChannelFeed = (props) => {
  const channels = props.channels.map( (channel) => {
    return (
      <div className="SearchedChannelItemWrapper" key={channel.id} onClick={() => props.join(channel.id).then(
          () => props.history.push(`/channels/${channel.id}`)).then(
          () => props.close()
          )}>
        <SearchedChannelItem channel={channel}/>
      </div>
    )
  })
  return (
    <div>
      Hello from the channel feed.
      {channels}
    </div>
  )
}
