import React from 'react'
import styles from './messages.module.css'

const Messages = (props) => {
  const state = props.dialogsPage

  const messageElement = state.messages.map((message) => (
    <li className={styles.dialog} key={state.id}>
      <img src={message.image} className={styles.photo} alt='user-photo' />
      <div className={styles.messages}>
        <div className={styles.name}>
          {message.firstName} {message.lastName}
        </div>
        <div className={styles.lastMessage}>{message.lastMessage}</div>
      </div>
    </li>
  ))
  const newMmessageBody = state.newMmessageBody

  const onSendMessageClick = () => {
    props.sendMessage()
  }

  const onNewMessageChange = (e) => {
    const body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={styles.container}>
      <div className={styles.dialogs}>
        <ul className={styles.list}>{messageElement}</ul>
        <div className={styles.message}>
          <textarea
            value={newMmessageBody}
            onChange={onNewMessageChange}
            className={styles.textarea}
            placeholder='Your message...'
          ></textarea>
          <button className={styles.submit} onClick={onSendMessageClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Messages
