import React from 'react';

import { SearchedChannelItem } from './searched_channel_item';


export class ChannelFeed extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(channel) {
    if (this.props.isCUAMember(channel)) {
      this.props.history.push(`/channels/${channel.id}`);
      this.props.close();
    } else {
      this.props.join(channel.id).then(
        () => {
          this.props.createSubscription(channel);
          this.props.history.push(`/channels/${channel.id}`);
          this.props.close();
        }
      )
    }
  }
  render() {
    const newChannelMessage = (
      <div className="newChannelDiv">
        There is no channel by that name. Press <span id="ENTERspan">ENTER</span> to make it.
      </div>
    )
    const channels = this.props.channels.map( (channel) => {
      return (
        <div className="SearchedChannelItemWrapper" key={channel.id} onClick={() => this.handleClick(channel)}>
              <SearchedChannelItem channel={channel}/>
        </div>
      )
    })
    let message;
    this.props.channels.length !== 0 ? message = channels : message = newChannelMessage
    return (
      <div className="ChannelMessage">
        {message}
      </div>
    )
  }
}
