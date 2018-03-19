import React from 'react';

export const SearchedUserItem = (props) => {
  return (
    <div className="SearchedUserItemDiv"
      onClick={() => {
        if (props.numleft > 0) {
          props.select(props.user.id)
        }
      }}>
      <img className="SearchedUserImage" src={props.user.image_url}></img>
      {props.user.username}
    </div>
  )
}
