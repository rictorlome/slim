import React from 'react';

import MessageFeedItem from './message_feed_item_container';
import MessageFeedHeader from './message_feed_header_container';
import { NewDay } from './new_day';
import { DayBox } from './day_box';

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
    let messages;
    const dayBoxes = this.props.days.map( (day) => {
      messages = this.props.getDaysMessages(this.props.messages, day)
      return (
        <DayBox key={day.getTime()} date={day} messages={messages}/>
      )
    })
    return (
      <div id="ScrollDiv" className="MessageFeedWrapper">
        <div className="MessageFeedUpperInfo">
          <MessageFeedHeader />
        </div>
        {dayBoxes}
        <div ref={el => { this.el = el; }} />
      </div>
    )
  }
}
