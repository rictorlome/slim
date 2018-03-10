import React from 'react';
import dateFormat from 'dateformat'


export class SearchedChannelItem extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    let d = new Date(this.props.channel.created_at)
    let df = dateFormat(d, "mmmm dS, yyyy")
    return (
      <div className="SearchedChannelItemContainer">
        <div className="ChannelItemNameAndCount">
          <div className="ChannelItemName">
            {"#  ".concat(this.props.channel.title)}
          </div>
          <div className="ChannelItemCount">
            <i id="searchedPersonOutline" className="material-icons">person_outline</i>
            {this.props.channel.member_ids.length}
          </div>
        </div>
        <div className="ChannelItemDateTime">
          {"Created on ".concat(df)}
        </div>
      </div>
    )
  }
}
