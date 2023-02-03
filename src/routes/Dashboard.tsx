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
        You are signed in, {username}.
      </h2>
      <Navigation />
    </div>
  </div>
)