import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to='/'>My page</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to='/messages'>Messages</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to='/users'>Users</NavLink>
      </li>
      <li className={styles.item}>
        <a>News</a>
      </li>
      <li className={styles.item}>
        <a>Settings</a>
      </li>
    </ul>
  )
}

export default Navigation
