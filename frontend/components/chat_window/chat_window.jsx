import React from 'react'

import { ChannelTable } from './channel_table/channel_table';

export const ChatWindow = (props) => {
  return (
    <div>
      <ChannelTable />
      <div>
        Hello from the chatwindow.
      </div>
    </div>
  )
}
