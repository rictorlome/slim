import React from 'react';

import { SearchedUserItem } from './searched_user_item';

export const UserFeed = (props) => {
  const users = props.users.map( (user) => {
    return (
      <SearchedUserItem numleft={props.numleft} select={props.select} user={user} key={user.id} />
    )
  })

  return (
    <div className="UserFeedWrapper">
      {users}
    </div>
  )
}
