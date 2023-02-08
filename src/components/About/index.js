// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="app-container">
    <div className="login-container">
      <Header />
      <h1 className="head">About Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default About
