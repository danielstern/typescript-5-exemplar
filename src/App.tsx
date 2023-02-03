import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Concerts } from './routes/Concerts';
import { Home } from './routes/Home'
import { useState } from 'react';
import { Dashboard } from './routes/Dashboard';
import { automatedLogin } from "./services/api-service"

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
        <Home handleLogin={handleLogin} />
    },
    {
      path: "/concerts",
      element: <Concerts />,
    },
  ]);

  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
      <footer>©2023,2024 Code Whisperer</footer>
    </div>
  )    
}

export default App
