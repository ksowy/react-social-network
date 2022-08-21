import React from 'react'
import styles from './posts.module.css'

const Posts = (props) => {
  let postsElements = props.posts.map((post) => (
    <div className={styles.post}>
      <div className={styles.profile}>
        <img src={post.image} alt={post.alt} />
        <h3 className={styles.name}>
          {post.firstName} {post.lastName}
        </h3>
      </div>
      <p className={styles.description}>{post.textContent}</p>
    </div>
  ))

  const newPostElement = React.createRef()

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={styles.posts}>
      <h3 className={styles.title}> My posts</h3>
      <textarea
        className={styles.textarea}
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
      <button className={styles.button} onClick={addPost}>
        Apply
      </button>
      {postsElements}
    </div>
  )
}

export default Posts
