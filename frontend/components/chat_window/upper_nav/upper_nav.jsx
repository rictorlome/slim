import React from 'react';

export class UpperNav extends React.Component {
  constructor(props) {
    super(props)
  }

  renderTitle() {
    let title;
    if (this.props.channel.title.length > 20) {
      title = this.props.channel.title.slice(0,20).concat('...')
    } else {
      title = this.props.channel.title
    }
    if (this.props.channel.is_dm) {
      return title;
    } else {
      return "#  ".concat(title)
    }
  }

  render() {
    return (
      <div className="upperNavContainer">
        <div className="upperNavLeftContainer">
          <div className="navTitle">{this.renderTitle()}</div>
          <div className="userCount">
            <i id="starBorder" className="material-icons">star_border</i>
            <i id="personOutline" className="material-icons">person_outline</i>
            {this.props.channel.member_ids.length}
          </div>
        </div>
      </div>
    )
  }

}
