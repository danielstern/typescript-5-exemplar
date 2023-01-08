import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Concerts } from './routes/Concerts';
import { Home } from './routes/Home'
import { useState } from 'react';
import { Dashboard } from './routes/Dashboard';


const App = () => {

  const [token, setToken] = useState(null)

  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <Dashboard/> : <Home setToken={setToken}/>,
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
    </div>
  )    
}

export default App
