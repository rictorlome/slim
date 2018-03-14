import React from 'react';

import MessageFeedItem from './message_feed_item_container';
import MessageFeedHeader from './message_feed_header_container';

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
    let lastAuthor;
    let first;
    const messages = this.props.messages.map( (message) => {
      lastAuthor === message.author_id ? first = false : first = true;
      lastAuthor = message.author_id;
      return (
        <MessageFeedItem first={first} key={message.id} message={message} />
      )
    });
    return (
      <div id="ScrollDiv" className="MessageFeedWrapper">
        <div className="MessageFeedUpperInfo">
          <MessageFeedHeader />
        </div>
        {messages}
        <div ref={el => { this.el = el; }} />
      </div>
    )
  }
}
