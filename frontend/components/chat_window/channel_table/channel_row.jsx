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

  pickNumber() {
    const a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine '];
    let num = this.props.channel.member_ids.length;
    if (num <= 2) {
      return (
        `looks_${word}`
      )
    } else if (num > 2 && num < 7) {
      return `looks_${num}`
    } else {
      return ``
    }
  }

  render() {
    let title;
    this.props.channel.title.length > 10 ? title = this.props.channel.title.slice(0,13).concat('...') : title = this.props.channel.title
    let message;
    if (this.props.channel.is_dm) {
      message = (
      <span>
        <i id="number" className="material-icons">{this.pickNumber()}</i> {title}
      </span>
    )
    } else {
      message = (
        <span>
          {"#".concat('   ').concat(title)}
        </span>
      )
    }
    debugger
    return (
      <NavLink
        to={`/channels/${this.props.channel.id}`}
        activeClassName="selected"
        onMouseEnter={this.hoverTrue}
        onMouseLeave={this.hoverFalse}
        className="ChannelRow">
        {message}
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
