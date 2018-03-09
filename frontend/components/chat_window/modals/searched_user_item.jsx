import React from 'react';

export const SearchedUserItem = (props) => {
  return (
    <div className="SearchedUserItemDiv">
      Hi, my name is {props.user.username}
    </div>
  )
}
