import React from 'react';

import ChannelFeed from './channel_feed_container';

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
            <div className="SearchInputDiv">
              <div className="magDiv">
                <i id="searchmag" className="material-icons">search</i>
              </div>
              <input className="SearchInput"
                placeholder={this.props.inputPlaceholder}
                value={this.state.title}
                onChange={this.updateTitle}
                ></input>
            </div>

            <div className="searchFeedContainer">
              <div className="SearchFeedHeader">
                {this.props.searchFeedHeader}
              </div>
              <div className="searchFeed">
                <ChannelFeed />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
