import React from 'react'
import styles from './profile-info.module.css'

const ProfileInfo = () => {
  return (
    <div className={styles.information}>
      <div className={styles.photo}>
        <img src='./images/svg/cat.svg' alt='cat-img' />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>Cat Catovskiy</h2>
        <ul className={styles.list}>
          <li className={styles.item}>first name: Cat</li>
          <li className={styles.item}>last name: Catovskiy</li>
          <li className={styles.item}>age: 12</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo
