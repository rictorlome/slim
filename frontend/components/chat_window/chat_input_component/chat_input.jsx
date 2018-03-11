import React from 'react'

export class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }
    this.handleSubmit= this.handleSubmit.bind(this)
    this.updateBody = this.updateBody.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    App.room.speak(this.state.body, this.props.channel, this.props.user)
    this.setState({body: ''})
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  render() {
    return (
      <div className='ChatInputWrapper'>
        <form>
          <input value={this.state.body} onChange={this.updateBody} className="TextInput" type='text'>

          </input>
          <div className="SubmitMessageButtonWrapper">
            <div onClick={this.handleSubmit} className="SubmitMessageButton">
              Submit
            </div>
          </div>
        </form>

      </div>
    )
  }
}
