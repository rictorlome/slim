import React from 'react';

import MessageFeedItem from './message_feed_item_container';
import { NewDay } from './new_day';

export const DayBox = (props) => {
  let lastAuthor;
  let first;
  
  const messages = props.messages.map( (message) => {
    first = (lastAuthor !== message.author_id)
    lastAuthor = message.author_id;

    return (
      <MessageFeedItem first={first} key={message.id} message={message} />
    )

  })

  return (
    <div>
      <NewDay date={props.date} />
      {messages}
    </div>
  )
}
    //
    //
    //
    //
    //
    // let lastAuthor;
    // let first;
    // let prevDate;
    // let newDay;
    // let d;
    // const messages = this.props.messages.map( (message) => {
    //
    //   d = new Date(message.created_at)
    //   newDay = (d.getDate() !== prevDate)
    //   prevDate = d.getDate();
    //
    //
    //   first = (lastAuthor !== message.author_id)
    //   lastAuthor = message.author_id;
    //
    //   let messages = this.props.getDaysMessages(this.props.messages, d)
    //
    //   if (newDay) {
    //     return (
    //       <div className="NewDayandMessageItem" key={message.id}>
    //         <DayBox date={d} messages={messages}/>
    //         <NewDay date={d} />
    //         <MessageFeedItem first={true} message={message} />
    //       </div>
    //     )
    //   } else {
    //     return (
    //       <MessageFeedItem first={first} key={message.id} message={message} />
    //     )
    //   }
    // });
