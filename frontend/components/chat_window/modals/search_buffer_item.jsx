import React from 'react';

export const SearchBufferItem = (props) => {
  return (
    <div onClick={() => props.unselectUser(props.user.id)}>
      {props.user.username}
    </div>
  )
}
