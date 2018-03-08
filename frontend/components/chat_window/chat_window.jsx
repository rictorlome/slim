import React from 'react'

import ChannelTable from './channel_table/channel_table_container';
import { UpperNav } from './upper_nav/upper_nav'

import Modal from './modals/modal'


export const ChatWindow = (props) => {
  return (
    <div className="ChatWindowContainer">
      <Modal />
      <ChannelTable />
      <div className="UpperNavAndFeedContainer">
        <UpperNav />
        <div>
          Hello from the chatwindow.
        </div>
      </div>
    </div>
  )
}
