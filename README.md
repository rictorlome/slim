# Slim

## Slim is a live chat app with avatar and emoji support.

___

[![Screen_Shot_2018-03-16_at_9.49.25_AM.png](https://s10.postimg.org/lf4ma1ik9/Screen_Shot_2018-03-16_at_9.49.25_AM.png)](https://postimg.org/image/olz5to305/)
___

## Description

Slim is a Slack imitation chat app built with Ruby on Rails on the backend, and React-Redux on the front. Action Cable is used for live chat, updating channels' participation counts, and notifying users of new direct messages.
___

Check out the below GIF for a demo of the ActionCable in action. New DM notification without refresh!

![Demo Gif](https://media.giphy.com/media/229P924TnXS3t2oj83/giphy.gif)

### [DEMO LINK](https://getonslim.com)

Feel free to make an account, upload an avatar and post some emojis!

---

## Purpose

The primary purpose of this application was to create a fully functional chat app with channel and direct message CRUD capability. The secondary purpose was to create a very user friendly, intuitive UI for users to comfortably enjoy chatting with their friends. To this end, user avatars and emoji functionality were very important. The AWS S3 Service was used for the image hosting, and the EmojiMart library was used for the React emoji-picker component.

## Backend

Adding ActionCable to the stack came with another layer of complexity in organizing the model and controller interactions. In addition, capitalizing on the ActiveRecord callbacks after_create and after_create_commit, I dispatched custom Broadcast jobs, classes inheriting from Rails' built in ApplicationJob.

``` ruby
class NewDMBroadcastJob < ApplicationJob
  queue_as :default

  def perform(channel)
    members = channel.members
    members.each do |member|
      ActionCable.server.broadcast "user_channel_#{member.id}", channel: render_channel(channel, member)
    end
  end

  private

  def render_channel(channel, member)
    ApplicationController.renderer.render(partial: 'api/channels/channel', locals: {channel: channel, member: member})
  end
end
```

## User Experience

Strong emphasis was placed on satisfying user expectations, including technically challenging yet seemingly effortless features of the original Slack.
Two such examples are:

 A. Allowing users to remove Users from the DM search buffer by clicking on the component. My approached involved additional component decomposition, so that every item in the Search Buffer was its own component with the capacity to remove itself from the search buffer on click.

  ``` javascript
  export const SearchBufferItem = (props) => {
    return (
      <div className="SearchBufferItemWrapper"
        onClick={() => props.unselectUser(props.user.id)}>
        {props.user.username}
        <div className="CloseButtonDiv">
            <i id="removeUser" className="material-icons">close</i>
        </div>
      </div>
    )
  }
  ```

B. Nesting messages into day boxes in the chat feed. This necessitated a total refactoring of the messages fetch - from the JSON jbuilder response to the Redux reducers and action creators - to include date information. Then the CSS styling to hook the current date to the bottom of the upper nav was extremely challenging.
