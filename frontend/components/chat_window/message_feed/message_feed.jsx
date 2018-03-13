import React from 'react';

import MessageFeedItem from './message_feed_item_container';

export class MessageFeed extends React.Component{
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      nextProps.fetchMessages();
    }
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.props.fetchMessages();
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render () {
    const messages = this.props.messages.map( (message) => {
      return (
        <MessageFeedItem key={message.id} message={message} />
      )
    });
    return (
      <div id="ScrollDiv" className="MessageFeedWrapper">
        <div className="MessageFeedUpperInfo">
          Hello from the message feed
        </div>
        {messages}
        <div ref={el => { this.el = el; }} />
      </div>
    )
  }
}
