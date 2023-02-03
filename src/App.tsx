import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { automatedLogin } from "./services/api-service"
import { Dashboard } from "./routes/Dashboard";
import { Splash } from "./routes/Splash";
import { Concerts } from "./routes/Concerts";

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
        <Splash handleLogin={handleLogin} />
    },
    {
      path: "/concerts",
      element: token ? <Concerts /> : <Navigate to="/"/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )    
}

export default App
