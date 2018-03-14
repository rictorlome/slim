import React from 'react';

import ChannelCategoryRow from './channel_category_row_container';
import DMCategoryRow from './dm_category_row_container';

export class ChannelTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: false,
      imageUrl: '',
      imageFile: null,
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleDropdown() {
    this.setState({dropdown: !this.state.dropdown})
  }

  componentDidMount() {
    this.props.createUserSub(this.props.cu);
    this.props.createSubscriptions(this.props.channels)
  }

  handleFileUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({imageUrl: reader.result, imageFile: file})
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageUrl: "", imageFile: null})
    }
  }
  handleSubmit() {
    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append("user[username]", this.props.username)
    if (file) formData.append("user[image]",file)
    this.props.updateUserImage(formData, this.props.cu)
    this.setState({dropdown: false})
  }

  render() {
    return (
      <div className="ChannelTableContainer">

        <div className={
          Boolean(this.state.dropdown) ? "toggleDropdown" : "toggleDropdown hidden"}>
          <div className="ImageSubmitWrapper">
            <div>
              {Boolean(this.state.imageFile) &&
                (<img id="iconpreview" height="45px" width="45x" src={this.state.imageUrl}></img>)}
            </div>
            <label htmlFor="fileUploadInput" className="fileUploadInputLabel">
              <span>
                Choose a photo!
              </span>
            </label>
            <input id="fileUploadInput"
              onChange={this.handleFileUpload}
               type='file'></input>
             <div
               className="imageSubmitDiv"
               onClick={this.handleSubmit}>
               Submit!
             </div>
          </div>
          <div className="LogoutButton" onClick={this.props.logout}>Logout!</div>
        </div>




        <div className="ChannelTableUpperDivOuter">
          <div className="ChannelTableUpperDivInner">
            <div className="WorkSpace">
              Your WorkSpace
              <i id="downarrow"
                 className="material-icons"
                 onClick={this.toggleDropdown}>keyboard_arrow_down</i>
            </div>
            <div className="nameAndButton">
              <div id="greenbutton"></div> {this.props.username}
            </div>
          </div>
        </div>
        <ChannelCategoryRow type={'Channels'} />
        <DMCategoryRow type={'Direct Messages'} />
      </div>
    )
  }
}
