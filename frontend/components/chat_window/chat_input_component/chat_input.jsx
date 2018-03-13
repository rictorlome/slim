import React from 'react'

export class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }
    this.handleSubmit= this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    App['room' + this.props.channel.id].speak(this.state.body, this.props.channel.id)
    this.setState({body: ''})
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  pressEnter(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e)
    }
  }

  renderPlaceholder() {
    let m;
    this.props.channel.is_dm ?
     m = 'Message '.concat(this.props.channel.title) :
      m = 'Message  #'.concat(this.props.channel.title);
    return m;
  }

  render() {
    return (
      <div className='ChatInputWrapper'>
        <div className="ChatInputInnerDiv">

          <div className="PlusButton">
            <i id="AddButton" className="material-icons">add</i>
          </div>
          <input onKeyPress={this.pressEnter}
             value={this.state.body}
              onChange={this.updateBody}
              data-emojiable="true"
              placeholder={this.renderPlaceholder()}
              className="TextInput" type='text'>
          </input>
        </div>
      </div>
    )
  }
}
