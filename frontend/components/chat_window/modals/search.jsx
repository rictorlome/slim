import React from 'react';
import keydown, { Keys } from 'react-keydown';

import ChannelFeed from './channel_feed_container';
import UserFeed from './user_feed_container';

import SearchBuffer from './search_buffer_container'

export class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      is_dm: props.type === 'User'
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateTitle(e) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({title: e.target.value})
    this.timeout = setTimeout(() => (this.props.search(this.state.title)), 300)
  }

  handleEnter(e) {
    if (this.state.title && e.key === 'Enter') {
      this.props.createChannel(this.state).then(
        (channel) => {
          this.props.createSubscription(channel.channel);
          return this.props.history.push(`/channels/${channel.channel.id}`)
        }
      ).then(() => this.props.close())
    }
  }

  componentWillMount() {
    this.props.clear();
  }

  handleClick(e) {
    if (!this.props.active) return;
    // This channel already exists
    if (this.props.destination !== -1) {

      if (this.props.isCUAMemberOf(this.props.destination)) {
        this.props.history.push(`/channels/${this.props.destination.id}`);
        this.props.close();
      } else {
        this.props.join(this.props.destination.id).then( () => {
          this.props.createSubscription(this.props.destination);
          this.props.history.push(`/channels/${this.props.destination.id}`)
        }).then( () => this.props.close());
      }
    // This channel does not exist.
    } else {
      this.props.createDM().then(
        (channel) => {
          this.props.createSubscription(channel.channel);
          this.props.history.push(`/channels/${channel.channel.id}`)
        }
      ).then(() => this.props.close())
    }
  }

  render() {
    return (
      <div className="OuterSearchDiv" onKeyPress={this.handleEsc}>
        <div className="InnerSearchDiv">
          <div className="SearchDivNav">
            <div className="escapeButton">
              <i id="escape" className="material-icons" onClick={this.props.close}>close</i>
            </div>
          </div>

          <form onKeyPress={this.handleEnter} className="SearchForm">

            <div className="SearchHeader">
              <div className="InnerSearchHeader">{this.props.header}</div>

            </div>
            <div className="SearchInputAndButton">
              <div className={this.props.type === 'Channel' ? "SearchInputDiv" : "UserSearchInputDiv"}>
                {this.props.type === 'Channel' && <div className="magDiv">
                  <i id="searchmag" className="material-icons">search</i>
                </div>
                }
                {this.props.type === 'User' && <SearchBuffer />}
                <input className={this.props.type === 'Channel' ? "SearchInput" : "UserSearchInput"}
                  placeholder={this.props.inputPlaceholder}
                  value={this.state.title}
                  onChange={this.updateTitle}></input>
              </div>

              {this.props.type === 'User' && (<div
                onClick={this.handleClick}
                className={this.props.active ? "GoButton" : "GoButton Disabled"}>Go</div>)}
              </div>

            <div className="searchFeedContainer">
              <div className={this.props.type === 'Channel' ? "SearchFeedHeader" : "UserSearchFeedHeader"}>
                {this.props.type === 'User' && this.props.numleft < 8 ?
                  (<div>
                  You can add {this.props.numleft} more people.
                </div>) :
                (<div>{this.props.searchFeedHeader}</div>)}
              </div>
              <div className="searchFeed">
                {this.props.type === 'Channel' && this.state.title && <ChannelFeed />}
                {this.props.type === 'User' && this.state.title && <UserFeed />}
              </div>
            </div>
        </form>
        </div>
      </div>
    );
  }
}
