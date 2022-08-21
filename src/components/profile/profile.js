import React from 'react'
import styles from './profile.module.css'
import ProfileInfo from './profile-info/profile-info'
import PostsContainer from './posts/posts-container'

const Profile = () => {
  return (
    <div className={styles.container}>
      <ProfileInfo />
      <PostsContainer />
    </div>
  )
}

export default Profile
