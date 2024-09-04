import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="left">
        <h1>ConvoAI</h1>
        <h2>Your Personal AI Chat Companion</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetutor adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <button>Get Started</button>
      </div>
      <div className="right"></div>
      
    </div>
  )
}

export default Homepage