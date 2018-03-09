import React from 'react';

export const SearchedUserItem = (props) => {
  return (
    <div className="SearchedUserItemDiv" onClick={() => props.select(props.user.id)}>
      Hi, my name is {props.user.username}
    </div>
  )
}
