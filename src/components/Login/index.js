// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookies = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 2})
    history.replace('/')
  }

  const onClickLoginBtn = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setCookies(data.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button type="button" onClick={onClickLoginBtn}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
