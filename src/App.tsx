import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Concerts } from './routes/Concerts';
import { useState } from 'react';
import { Dashboard } from './routes/Dashboard';
import { automatedLogin } from "./services/api-service"
import { Navigation } from "./components/Navigation";

type HeaderProps = {
  handleLogin: () => Promise<void>,
  isSignedIn? : boolean,
  username? : string
}

export const Header = ({
  handleLogin,
  isSignedIn,
  username
} : HeaderProps ) => (
  <div className="header">
    <h2>
      Musician's Portal
    </h2>
    {isSignedIn ? <span>
      <Navigation />
    </span> : <button type="button" onClick={handleLogin}>
      Automated Sign In
    </button>}
  </div>
)

export const Splash = () => (
  <div className="splash">
    <h1>
      Globomantics
    </h1>
    <h3>
      Connecting creativity with solutions.
    </h3>
    <p>
      You are not signed in.
    </p>
  </div>
)


const App = () => {

  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")

  const handleLogin = async () => {
    const { token, username } = await automatedLogin()
    setToken(token)
    setUsername(username)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? 
        <Dashboard username={username} /> : 
        <Splash />
    },
    {
      path: "/concerts",
      element: <Concerts />,
    },
  ]);

  return (
    <div className="App">
      <Header handleLogin={handleLogin} isSignedIn={!!token} username={username}/>
      <div>
        <RouterProvider router={router} />
      </div>
      <footer>©2023,2024 Code Whisperer</footer>
    </div>
  )    
}

export default App
