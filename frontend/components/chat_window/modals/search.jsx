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
  }

  updateTitle(e) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({title: e.target.value})
    this.timeout = setTimeout(() => (this.props.search(this.state.title)), 500)
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

          <form className="SearchForm">
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
                {this.props.type === 'Channel' && <ChannelFeed />}
                {this.props.type === 'User' && <UserFeed />}
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
