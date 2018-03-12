import React from 'react';

import MessageFeedItem from './message_feed_item_container';

export class MessageFeed extends React.Component{
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.fetchMessages()
    }
  }

  componentDidMount() {
    this.props.fetchMessages()
  }

  render () {
    const messages = this.props.messages.map( (message) => {
      return (
        <MessageFeedItem key={message.id} message={message} />
      )
    });
    return (
      <div className="MessageFeedWrapper">
        Hello from the message feed
        {messages}
      </div>
    )
  }
}
