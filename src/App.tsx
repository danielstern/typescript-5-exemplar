import { useState } from 'react'
import './App.css'

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { Concerts } from './routes/Concerts';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/concerts">Concerts</Link>
  </nav>
)

const Root = () => (
  <div className="App">
    <div className="header">
      <h1>
        Musician Portal
      </h1>
      <h2>
        By Globomantics
      </h2>
      <Navigation/>
    </div>
  </div>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: < Root />,
  },
  {
    path: "/concerts",
    element: <Concerts />,
  },
]);

function App() {

  return (
    <div className="App">
      {/* <div className="header">
        <h1>
          Musician Portal
        </h1>
        <h2>
          By Globomantics
        </h2>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/concerts">Concerts</Link>
      </nav> */}
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
