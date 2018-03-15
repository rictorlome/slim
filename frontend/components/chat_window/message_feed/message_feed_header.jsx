import React from 'react'
import dateFormat from 'dateformat'

export const MessageFeedHeader = (props) => {
  let message;
  let title;
  const d = new Date(props.created_date);
  let df = dateFormat(d, "mmmm dS");
  props.is_dm ? title = props.users_minus_you : title = "# ".concat(props.title)


  props.is_dm ? message = `This is the very beginning of
  your direct message history with ${props.users_minus_you}.` :
  message = ` created this channel on ${df}.
  This is the very beginning of the ${props.title} channel.
  Purpose: This channel is for chatting and sending emojis.`

  return (
    <div className="MessageFeedHeaderWrapper">
      <div className="MessageFeedHeaderHeader">
        {title}
      </div>
      <div className="MessageFeedHeaderBody">
        {!props.is_dm && <span className="MessageFeedHeaderAuthor">@{props.author}</span>}
        {message}
      </div>

    </div>
  )
}
