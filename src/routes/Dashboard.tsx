import { Navigation } from '../components/Navigation';

type DashboardRouteProps = {
  username : string
}

export const Dashboard = ({
  username = "Default User"
} : DashboardRouteProps ) => (
  <div className="App">
    <div className="header">
      <h2>
        Welcome, {username}!
      </h2>
      <Navigation />
    </div>
    <footer>Code Whisperer</footer>
  </div>
)