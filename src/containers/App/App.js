import React from 'react'
import { connect } from 'react-redux'
import { login } from '@/store/actions/authenAction'
import logo from '@/assets/images/logo.svg'
import { Button, DatePicker } from 'antd'
import './App.sass'

function App(props) {
  // eslint-disable-next-line react/prop-types
  const { authen: { authenStatus }, doLogin } = props
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React abc
        </a>
        <div>
          Authen Status:
          { authenStatus }
        </div>
        <Button onClick={() => doLogin()}>Login</Button>
        <DatePicker />
      </header>
    </div>
  )
}

const mapStateToProps = (state) => ({
  authen: state.authen
})

const mapActionToProps = (dispatch) => ({
  doLogin: () => {
    dispatch(login('abc', 'bcd'))
  }
})

export default connect(mapStateToProps, mapActionToProps)(App)
