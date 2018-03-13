import React from 'react';

import ChannelCategoryRow from './channel_category_row_container';
import DMCategoryRow from './dm_category_row_container';

export class ChannelTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: false,
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({dropdown: !this.state.dropdown})
  }

  componentDidMount() {
    this.props.createUserSub(this.props.cu);
    this.props.createSubscriptions(this.props.channels)
  }

  render() {
    return (
      <div className="ChannelTableContainer">

        <div className={
          Boolean(this.state.dropdown) ? "toggleDropdown" : "toggleDropdown hidden"}>
          <div className="LogoutButton" onClick={this.props.logout}>Logout!</div>
        </div>




        <div className="ChannelTableUpperDivOuter">
          <div className="ChannelTableUpperDivInner">
            <div className="WorkSpace">
              Your WorkSpace
              <i id="downarrow"
                 className="material-icons"
                 onClick={this.toggleDropdown}>keyboard_arrow_down</i>
            </div>
            <div className="nameAndButton">
              <div id="greenbutton"></div> {this.props.username}
            </div>
          </div>
        </div>
        <ChannelCategoryRow type={'Channels'} />
        <DMCategoryRow type={'Direct Messages'} />
      </div>
    )
  }
}
