<<<<<<< HEAD
=======
# README
  
>>>>>>> e8958ea2ad59f9954f5a9d2ab8c3d037a34c6112
# Slim

## Slim is a live chat app with avatar and emoji support.

___

[![Screen_Shot_2018-03-16_at_9.49.25_AM.png](https://s10.postimg.org/lf4ma1ik9/Screen_Shot_2018-03-16_at_9.49.25_AM.png)](https://postimg.org/image/olz5to305/)
___

## Description

Slim is a Slack imitation chat app built with Ruby on Rails on the backend, and React-Redux on the front. Action Cable is used for live chat, updating channels' participation counts, and notifying users of new direct messages.
___

Below is a 20 second screencast of the app in action:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=f_ad907-zQ0
<<<<<<< HEAD
" target="_blank"><img src="http://img.youtube.com/vi/f_ad907-zQ0/0.jpg"
=======
" target="_blank"><img src="http://img.youtube.com/vi/f_ad907-zQ0/0.jpg" 
>>>>>>> e8958ea2ad59f9954f5a9d2ab8c3d037a34c6112
alt="Slim Screencast" width="240" height="180" border="10" /></a>

### [DEMO LINK](https://slack-imitation.herokuapp.com)

Feel free to make an account, upload an avatar and post some emojis!

---

## Purpose

The primary purpose of this application was to create a fully functional chat app with channel and direct message capability. The secondary purpose was to create a very user friendly, intuitive UI for users to comfortably enjoy chatting with their friends. To this end, user avatars and emoji functionality were very important. The AWS S3 Service was used for the image hosting, and the EmojiMart library was used for the React emoji-picker component.

## Design Philosophy

The guiding philosophies behind the front-end design were normalization of state and segregation of component responsibilities into a strict component hierarchy. For example, the render logic for all the messages in a channel goes:
MessageFeed renders DayBoxes => DayBoxes render MessageFeedItems => MessageFeedItems render a few nested divs.
<<<<<<< HEAD
=======



>>>>>>> e8958ea2ad59f9954f5a9d2ab8c3d037a34c6112
