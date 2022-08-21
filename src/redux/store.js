import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 0,
          firstName: 'Dog',
          lastName: 'Dogovich',
          textContent:
            'I come back to the Brest and I will started to working soon..',
          image: './images/svg/dog.svg',
          alt: 'Image of Dog Dogovich',
        },
        {
          id: 1,
          firstName: 'Cat',
          lastName: 'Catovskiy',
          textContent: 'Yestarday I read the "Commoness" book',
          image: './images/svg/cat.svg',
          alt: 'Image of Cat Catovskiy',
        },
      ],
      newPostText: '12345',
    },
    dialogsPage: {
      messages: [
        {
          id: 0,
          firstName: 'Sloth',
          lastName: 'Slothov',
          lastMessage: 'Ne hochew progul9ts9?',
          image: './images/svg/sloth.svg',
        },
        {
          id: 1,
          firstName: 'Dog',
          lastName: 'Dogovich',
          lastMessage: 'Kak tebe kniga?',
          image: './images/svg/dog.svg',
        },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('rerendered')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export const addPostActionCreator = () => ({
  type: ADD_NEW_POST,
})

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
})

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: body,
  }
}

window.store = store
export default store
