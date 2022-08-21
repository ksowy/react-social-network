const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      const newPost = {
        id: 2,
        firstName: 'Husky',
        lastName: 'Huskinskiy',
        textContent: state.newPostText,
        image: './images/svg/husky.svg',
        alt: 'Image of Husky Huskinskiy',
      }
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    default:
      return state
  }
}

export default profileReducer
