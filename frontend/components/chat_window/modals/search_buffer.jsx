import React from 'react';

import { SearchBufferItem } from './search_buffer_item';

export const SearchBuffer = (props) => {
  const searchBufferItems = props.selectedUsers.map( (user) => {
    return (
      <SearchBufferItem key={user.id} user={user} unselectUser={props.unselectUser} />
    );
  })

  return (
    <div className="SearchBuffer">
      {searchBufferItems}
    </div>
  )
}
