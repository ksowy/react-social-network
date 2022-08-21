import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src='./images/svg/logo.svg' alt='logo' />
          <h1 className={styles.title}>SocialNetwork</h1>
        </div>
        <div className={styles.navigation}>
          <span className={styles.arrow}></span>
          <img src='./images/svg/cat.svg' alt='navigation-img' />
        </div>
      </div>
    </div>
  )
}

export default Header
