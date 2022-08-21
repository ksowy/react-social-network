import React from 'react'
import styles from './users.module.css'

const Users = (props) => {
  const userElement = props.users.map((user) => (
    <li className={styles.userItem} key={user.id}>
      <img className={styles.photo} src={user.image} alt='user-photo' />
      <div className={styles.content}>
        <div className={styles.name}>
          {user.firstName} {user.lastName}
        </div>
        <div className={styles.lastMessage}>{user.status}</div>
      </div>
      {user.followed ? (
        <button
          className={styles.follow}
          onClick={() => {
            props.unfollow(user.id)
          }}
        >
          Follow
        </button>
      ) : (
        <button
          className={styles.follow}
          onClick={() => {
            props.follow(user.id)
          }}
        >
          Unfollow
        </button>
      )}
    </li>
  ))
  if (props.users.lenght === 0) {
    props.setUsers([
      {
        id: 0,
        followed: true,
        firstName: 'Sloth',
        lastName: 'Slothov',
        lastMessage: 'Ne hochew progul9ts9?',
        image: './images/svg/sloth.svg',
        status: 'After answer the queation I will go a walk',
        location: { city: 'Brest', country: 'Belarus' },
      },
      {
        id: 1,
        followed: true,
        firstName: 'Dog',
        lastName: 'Dogovich',
        lastMessage: 'Kak tebe kniga?',
        image: './images/svg/dog.svg',
        status: 'Reading the book... ',
        location: { city: 'Pinsk', country: 'Belarus' },
      },
      {
        id: 2,
        followed: false,
        firstName: 'Cat',
        lastName: 'Catovskiy',
        lastMessage: 'I cooking freakfast right now!',
        image: './images/svg/dog.svg',
        status: 'Cooking... ',
        location: { city: 'Brest', country: 'Belarus' },
      },
    ])
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{userElement}</ul>
      <div className={styles.seeMore}></div>
    </div>
  )
}

export default Users
