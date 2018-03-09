import React from 'react';

import { NavLink, withRouter } from 'react-router-dom';


class ChannelRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
    this.hoverTrue = this.hoverTrue.bind(this);
    this.hoverFalse = this.hoverFalse.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  hoverTrue() {
    this.setState({hovered: true})
  }
  hoverFalse() {
    this.setState({hovered: false})
  }

  handleClick() {
    const dest = `/channels/${this.props.general}`
    this.props.leave(this.props.channel.id).then(
      () => {
        return this.props.history.push(dest)
      }
    )
  }

  render() {
    return (
      <NavLink
        to={`/channels/${this.props.channel.id}`}
        activeClassName="selected"
        onMouseEnter={this.hoverTrue}
        onMouseLeave={this.hoverFalse}
        className="ChannelRow">
        #     {this.props.channel.title}
        <div className={
            this.state.hovered && this.props.channel.title !== 'general' ? 'ChannelRowInnerDiv' : 'hidden'}
            onClick={this.handleClick}>
          <i id="leaveChannel" className="material-icons">highlight_off</i>
        </div>
      </NavLink>
    )
  }
};

export default withRouter(ChannelRow);
