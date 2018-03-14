import React from 'react'

export const MessageFeedHeader = (props) => {
  let message;
  props.type === 'DM' ? message = `This is the very beginning of
   your direct message history with ${users_minus_you}` :
   message = "Another" 
  return (
    <div className="MessageFeedHeaderWrapper">

      <div className="MessageFeedHeaderBody">
        This is the very beginning of {props.title}
      </div>

    </div>
  )
}
