import React from 'react';

import ChannelRow from './channel_row';

export class CategoryRow extends React.Component{
  constructor(props) {
    super(props)
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
  //     this.props.selectChannel(nextProps.match.params.channelId)
  //   }
  // }

  render() {
    const channels = this.props.channels.map( (channel) => {
      return (<ChannelRow
        key={channel.id}
        general={this.props.general}
        leave={this.props.leave}
        channel={channel} />)
      })
      return (
        <div>
          <div title={this.props.buttonTitle}
            className="thumb"
            onClick={this.props.openSearch}>
            {this.props.type}
          </div>
          {channels}
        </div>
      )
  }
};
