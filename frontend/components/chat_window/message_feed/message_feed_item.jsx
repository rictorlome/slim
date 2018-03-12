import React from 'react';
import dateFormat from 'dateformat'

export const MessageFeedItem = (props) => {
  const d = new Date(props.message.created_at);
  let df = dateFormat(d, "hh:MM TT");
  return (
    <div className="MessageItemWrapper">
      <div className="MessageItemImage">
        <i id="AccountBox" className="material-icons">account_box</i>
      </div>
      <div className="MessageItemInfoAndBody">
        <div className="MessageItemInfo">
          <span className="AuthorName">
            {props.author(props.message.author_id).concat('         ')}
          </span>
          <span className="Time">
            {df}
          </span>
        </div>

        <div className="MessageItemBody">
          {props.message.body}
        </div>
      </div>

      </div>
  )
}
