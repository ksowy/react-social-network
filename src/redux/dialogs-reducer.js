const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      }
    }
    case SEND_MESSAGE: {
      const body = state.newMessageBody
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 2,
            firstName: 'Husky',
            lastName: 'Huskinskiy',
            lastMessage: body,
            image: './images/svg/husky.svg',
          },
        ],
        newMessageBody: '',
      }
    }
    default:
      return state
  }
}

export default dialogsReducer
