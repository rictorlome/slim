import React from 'react';

export const Search = (props) => {
  return (
    <div className="OuterSearchDiv">
      <div className="InnerSearchDiv">
        <div className="SearchDivNav">
          <div className="escapeButton">
            <i id="escape" className="material-icons" onClick={props.close}>close</i>
          </div>
        </div>

        <form className="SearchForm">
          <div className="SearchHeader">{props.header}</div>
          <div className="SearchInputDiv">
            <div className="magDiv">
              <i id="searchmag" className="material-icons">search</i>
            </div>
            <input className="SearchInput"
              placeholder={props.inputPlaceholder}></input>
          </div>

          <div className="searchFeedContainer">
            <div className="SearchFeedHeader">
              {props.searchFeedHeader}
            </div>
            <div className="searchFeed">
              Hello from searchFeed
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
