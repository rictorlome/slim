import React from 'react'

export class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='ChatInputWrapper'>
        <form onSubmit={this.handleSubmit}>
          <input className="TextInput" type='text'>

          </input>
          <div className="SubmitMessageButtonWrapper">
            <div className="SubmitMessageButton">
              Submit
            </div>
          </div>
        </form>

      </div>
    )
  }
}
