import { Link } from "react-router-dom";
import "./navigation.css"

export const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/concerts">Concerts</Link>
  </nav>
)
