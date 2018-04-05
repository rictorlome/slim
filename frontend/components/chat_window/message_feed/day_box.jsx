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
