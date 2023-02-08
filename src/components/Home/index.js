// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = () => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="app-container">
      <div className="login-container">
        <Header />
        <h1 className="head">Home Route</h1>
        <LogoutButton />
      </div>
    </div>
  )
}

export default withRouter(Home)
