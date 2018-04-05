import React from 'react';

import ChannelRow from './channel_row';

export class CategoryRow extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const channels = this.props.channels.map( (channel) => {
      return (<ChannelRow
        key={channel.id}
        general={this.props.general}
        leave={this.props.leave}
        channel={channel} />)
      })
      return (
        <div className="ChannelCategoryRow">
          <div className="thumbWrapper">
          <div title={this.props.buttonTitle}
            className="thumb"
            onClick={this.props.openSearch}>
            {this.props.type}
          </div>
          {channels}
        </div>
        </div>
      )
  }
};
