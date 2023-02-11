import { Link } from "react-router-dom";

type NavigationProps = {
  handleLogin?: () => Promise<void>,
  isSignedIn? : boolean,
  username? : string
}

export const Navigation = ({
  handleLogin,
  isSignedIn
} : NavigationProps ) => (
  <nav>
    <h2>
      Musician's Portal
    </h2>
    {isSignedIn ? <>
      <Link to="/">Home</Link>
      <Link to="/concerts">Concerts</Link>
    </> : <button type="button" onClick={handleLogin}>
      Automated Sign In
    </button>}
  </nav >
)