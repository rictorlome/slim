import React from 'react';

import MessageFeedItem from './message_feed_item_container';
import MessageFeedHeader from './message_feed_header_container';
import { NewDay } from './new_day';
import DayBox from './day_box_container';

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
    let prevDate;
    let newDay;
    let d;
    const messages = this.props.messages.map( (message) => {

      d = new Date(message.created_at)
      newDay = (d.getDate() !== prevDate)
      prevDate = d.getDate();


      first = (lastAuthor !== message.author_id)
      lastAuthor = message.author_id;

      if (newDay) {
        return (
          <div className="NewDayandMessageItem" key={message.id}>
            <DayBox />
            <NewDay date={d} />
            <MessageFeedItem first={true} message={message} />
          </div>
        )
      } else {
        return (
          <MessageFeedItem first={first} key={message.id} message={message} />
        )
      }
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
