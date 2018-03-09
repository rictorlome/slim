import React from 'react';

import { SearchedUserItem } from './searched_user_item';

export const UserFeed = (props) => {
  const users = props.users.map( (user) => {
    return (
      <SearchedUserItem select={props.select} user={user} key={user.id} />
    )
  })

  return (
    <div className="UserFeedWrapper">
      Hello from the user feed.
      {users}
    </div>
  )
}
