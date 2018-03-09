import React from 'react';

import ChannelFeed from './channel_feed_container';
import UserFeed from './user_feed_container';

export class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    debugger
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
          debugger
          return this.props.history.push(`/channels/${channel.channel.id}`)
        }
      ).then(() => this.props.close())
    }
  }

  componentWillMount() {
    this.props.clear();
  }

  render() {
    return (
      <div className="OuterSearchDiv">
        <div className="InnerSearchDiv">
          <div className="SearchDivNav">
            <div className="escapeButton">
              <i id="escape" className="material-icons" onClick={this.props.close}>close</i>
            </div>
          </div>

          <form onKeyPress={this.handleEnter} className="SearchForm">
            <div className="SearchHeader">{this.props.header}</div>
              <div className={this.props.type === 'Channel' ? "SearchInputDiv" : "UserSearchInputDiv"}>
                <div className="magDiv">
                  <i id="searchmag" className="material-icons">search</i>
                </div>

              <input className={this.props.type === 'Channel' ? "SearchInput" : "UserSearchInput"}
                placeholder={this.props.inputPlaceholder}
                value={this.state.title}
                onChange={this.updateTitle}></input>

              {this.props.type === 'User' && (<div className="GoButton">Go</div>)}

            <div className="searchFeedContainer">
              <div className="SearchFeedHeader">
                {this.props.searchFeedHeader}
              </div>
              <div className="searchFeed">
                {this.props.type === 'Channel' && this.state.title && <ChannelFeed />}
                {this.props.type === 'User' && this.state.title && <UserFeed />}
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
