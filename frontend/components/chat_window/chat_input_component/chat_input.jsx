import React from 'react';
// import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      emojiSearch: false
    }
    this.handleSubmit= this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    App['room' + this.props.channel.id].speak(this.state.body, this.props.channel.id)
    this.setState({body: '', emojiSearch: false})
    // this.determinePickerStyle();
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  pressEnter(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e)
    }
  }
  charsLeft() {
    return 1000 - this.state.body.length;
  }
  renderCharsLeft() {
    this.charsLeft() < 500 ? String(this.charsLeft()) : ""
  }

  renderPlaceholder() {
    let m;
    this.props.channel.is_dm ?
     m = 'Message '.concat(this.props.dmTitle) :
      m = 'Message  #'.concat(this.props.channel.title);
    return m;
  }
  addEmoji(emoji, event) {
    this.setState({body: this.state.body.concat(emoji.native)})
  }
  toggleSearch() {
    this.setState({emojiSearch: !this.state.emojiSearch})
  }
  determinePickerStyle() {
    let d;
    this.state.emojiSearch ?
    d = { position: 'absolute', width: '315px', bottom: '75px', right: '70px'} :
    d = { display: 'none'};
    return d;
  }

  render() {
    return (
      <div className="ChatInputAndEmoji">

      <div className='ChatInputWrapper'>
        <div className="ChatInputInnerDiv">

          <div className="PlusButton">
            <i id="AddButton" className="material-icons">add</i>
          </div>
          <textarea onKeyPress={this.pressEnter}
             value={this.state.body}
              onChange={this.updateBody}
              maxLength="1000"
              placeholder={this.renderPlaceholder()}
              className="TextInput" type='text'>
          </textarea>
          <div className="emojiPickerButton">
            <i id="AddEmojiFace" onClick={() => this.toggleSearch()}
              className="material-icons">tag_faces</i>
          </div>
        </div>
        <div>
          {this.renderCharsLeft()}
        </div>
      </div>
      <Picker
        className={this.state.emojiSearch ? 'emoji-mart' : 'hidden'}
        set='emojione'
        showPreview={false}
        onClick={this.addEmoji}
        title='Pick your emoji…' emoji='point_up'
        style={this.determinePickerStyle()}/>
    </div>
    )
  }
}
