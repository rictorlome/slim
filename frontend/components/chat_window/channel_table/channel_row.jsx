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
        this.props.history.push(dest)
      }
    )
  }

  pickSource() {
    const a = ['',window.oneicon,window.twoicon,window.threeicon,window.fouricon,window.fiveicon,
              window.sixicon,window.sevenicon,window.eighticon,window.nineicon];
    let num = this.props.channel.member_ids.length;
    return a[num]
  }

  render() {
    let title;
    this.props.channel.title.length > 10 ? title = this.props.channel.title.slice(0,12).concat('...') : title = this.props.channel.title
    let message;
    if (this.props.channel.is_dm) {
      message = (
      <div>
        <img id="number" src={this.pickSource()} height="13px" weight="13px"></img>
        {title}
      </div>
    )
    } else {
      message = (
        <div>
          {"#".concat('   ').concat(title)}
        </div>
      )
    }
    return (
      <NavLink
        to={`/channels/${this.props.channel.id}`}
        activeClassName="selected"
        onMouseOver={this.hoverTrue}
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
