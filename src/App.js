import React from 'react'
import styles from './app.module.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/header.js'
import Navigation from './components/navigation/navigation.js'
import Profile from './components/profile/profile'
import MessagesContainer from './components/messages/messages-container'
import UsersContainer from './components/users/users-container'

const App = (props) => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Navigation />
        <Routes>
          <Route path='/' element={<Profile />}></Route>
          <Route path='/messages' element={<MessagesContainer />}></Route>
          <Route path='/users' element={<UsersContainer />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
