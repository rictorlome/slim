import React from 'react'
import Modal from './modals/modal'

import ChannelTable from './channel_table/channel_table_container';
import UpperNav from './upper_nav/upper_nav_container'
import ChatInput from './chat_input_component/chat_input_container'
import MessageFeed from './message_feed/message_feed_container';


export const ChatWindow = (props) => {
  return (
    <div className="ChatWindowContainer">
      <Modal />
      <ChannelTable />
      <div className="UpperNavAndFeedContainer">
        <UpperNav />
        <div className="MessageFeedAndChatInput">
          <MessageFeed />
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
