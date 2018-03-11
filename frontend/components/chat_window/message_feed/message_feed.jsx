import React from 'react';

export class MessageFeed extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMessages()
  }

  render () {
    const messages = this.props.messages.map( (message) => {
      return (
        <div key={message.id}>
          {message.body}
        </div>
      )
    });
    return (
      <div>
        Hello from the message feed
        {messages}
      </div>
    )
  }
}
