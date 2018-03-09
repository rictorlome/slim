import React from 'react';

export const ChannelRow = (props) => {
  return (
    <li
      className={props.selected ? "ChannelRow selected" : "ChannelRow" }
      onClick={props.redirect}>
      #     {props.channel.title}
    </li>
  )
};
