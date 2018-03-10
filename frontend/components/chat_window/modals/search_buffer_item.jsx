import React from 'react';

export const SearchBufferItem = (props) => {
  return (
    <div className="SearchBufferItemWrapper"
      onClick={() => props.unselectUser(props.user.id)}>
      {props.user.username}
      <div className="CloseButtonDiv">
          <i id="removeUser" className="material-icons">close</i>
      </div>
    </div>
  )
}
