import React from 'react';
import dateFormat from 'dateformat'

export class MessageFeedItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      hovered: false,
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleUnhover = this.handleUnhover.bind(this);
  }

  handleHover() {
    this.setState({hovered: true})
  }
  handleUnhover() {
    this.setState({hovered: false})
  }

  renderFirst() {
    const d = new Date(this.props.message.created_at);
    let df = dateFormat(d, "hh:MM TT");
    return (
      <div
        className="MessageItemWrapper">

        <div className="MessageItemImage">
          <i id="AccountBox" className="material-icons">account_box</i>
        </div>

        <div className="MessageItemInfoAndBody">
          <div className="MessageItemInfo">
            <span className="AuthorName">
              {this.props.author(this.props.message.author_id).concat('         ')}
            </span>
            <span className="Time">
              {df}
            </span>
          </div>

          <div className="MessageItemBody">
            {this.props.message.body}
          </div>
        </div>
      </div>
    )
  }
  renderTimeDiv(df) {
    if (this.state.hovered) {
      return (
        <div className="TimeDiv">
        {df}
        </div>
      )
    } else {
      return
    }
  }
  renderNext() {
    const d = new Date(this.props.message.created_at);
    let df = dateFormat(d, "hh:MM TT");
    return (
      <div className="MessageItemWrapper"
        onMouseOver={this.handleHover}
        onMouseLeave={this.handleUnhover}>
        <div className="NextMessageItemTimeAndBody">
          <div className="NextMessageTime">
            {this.renderTimeDiv(df)}
          </div>

        <div className="MessageItemBody">
          {this.props.message.body}
        </div>
      </div>
    </div>
    )
  }
  render() {
    if (this.props.first) {
      return this.renderFirst()
    } else { return this.renderNext() }
  }
}
