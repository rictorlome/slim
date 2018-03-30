import React from 'react'
import Modal from './modals/modal'

import ChannelTable from './channel_table/channel_table_container';
import UpperNav from './upper_nav/upper_nav_container'
import ChatInput from './chat_input_component/chat_input_container'
import MessageFeed from './message_feed/message_feed_container';


export class ChatWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropClose: 0,
      martClose: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    const dropdown = document.getElementById('dropdown')
    const inDrop = dropdown.contains(e.target)
    if ( !inDrop && e.target.id !== 'downarrow') {
      this.setState({dropClose: this.state.dropClose+1})
    }
    const mart = document.querySelector('.emoji-mart');
    const inMart = mart.contains(e.target)
    if ( !inMart && e.target.id !== 'AddEmojiFace') {
      this.setState({martClose: this.state.martClose+1})
    }
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="ChatWindowContainer">
        <Modal />
        <ChannelTable dropdown={this.state.dropClose} />
        <div className="UpperNavAndFeedContainer">
          <UpperNav />
          <div className="MessageFeedAndChatInput">
            <MessageFeed />
            <ChatInput mart={this.state.martClose} />
          </div>
        </div>
      </div>
    )
  }
}
