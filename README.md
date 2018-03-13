# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

TODO

-Add red highlighting to form input fields when flashing errors.

-Change font

DONE -Add dynamic text to sign in form (sign in vs login)
DONE -Add logo to Nav bar
DONE -Add github, linked in, etc. buttons to navbar
DONE -Add picture to splash page

DONE -Make navbar size dynamically
DONE -Make splash page size dynamically

DONE -Make sure you cannot SEARCH YOURSELF!!!

-Add hover effects to splash and session forms.
-Move guest login button to exact center of navbar
-Make guest login use faker gem
-Remove welcome from navbar


-Figure out best query for channel search.
-Add redirect to channel page on login
-Add users channels in channel tabel container
-Add users name and channel info


DONE -Channel search (modal)
-Browse all channels (on hover)
-Create channel / Join channel


-User search(modal)
-Create dm

DONE. Start using fonts.
DONE . Fix styling of logout button.
DONE . Fix styling of channel table index.
DONE Fix timing of hover popup.
  -
DONE. Fix styling of search modals.
DONE. Add info for SearchRowIndex. (Number of Members)

Tomorrow I need to do the following:

DONE. Make sure arrow does not drop below your workspace in channel table.
DONE 1. Add create new channel and dm.
  - Make user search items clickable.
  - Make user search build up a buffer of users.
DONE . Add leave channel or dm at click.
DONE. Add channel info to upper nav.
DONE 4. Get membership info from backend with channel searches.

5. Set a cap on max people in DM.
DONE. Add channel info into upper nav.
DONE. Style DM and Channel search.
8. Add message model.
9. Add message controller.

TODAY
DONE. Style upper nav container.










  MONDAY

0. Fix N+1 query on sign in.
0. Cap on DMs.
0. Add error flashing on forms.
0. Add DMs/Channels deleting themselves after everyone leaves.


Possible Bugs: HOW TO TEST?
(number of participants not updating in time.)
  - Check how number of participants is rendering. Connect the component.
(not redirecting to correct channel after creation.)
  - This one is a little weird.


DONE. Subscription to every channel
DONE. Not subscribing after creation of channel
DONE. Using methods defined on window.
DONE. Set up redis to work on production deployment.

Style message: (name, picture, time, edit hover)
0. Add edit feature.
0. Every user in DM should subscribe.

Added websocket capability to chat. Things to work on moving forward.
0. Fix leaving DMs.
1. Add paperclip capability for image hosting.
DONE. Add emojis to status and to messages.
3. Add websocket listening for joining of channels
    - Check to see whether navbar is listening to update props
4. Double check reducers to make sure they are listening for everything they are supposed to.
DONE. Style messages to make them look nicer on the page.
   - Consider formatting it so that only first message by an author appears
       with a picture and with the name.
6. Add header message to channels.
7. Double check whether any N+1 queries are firing off.
DONE. Add redirect to channel if you are searching one you are in.
9. Add escape to exit modals.
DONE. Add icon on browser tab.
DONE. Remove hover effect on channel and dm.
12. Add scroll to DM and Channel category row.
