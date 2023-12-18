import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
        <Link role="button" to='/home'>
        <span>Start</span>
        </Link>
    </div>
  )
}

export default LandingPage