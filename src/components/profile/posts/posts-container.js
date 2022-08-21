import Posts from './posts'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/store'
import { connect } from 'react-redux'

// const PostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState()
//         const addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }

//         const onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text))
//         }

//         return (
//           <Posts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },

    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
