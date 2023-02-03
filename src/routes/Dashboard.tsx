import { Layout } from "../components/Layout"

type DashboardRouteProps = {
  username : string
}

export const Dashboard = ({
  username = "Default User"
} : DashboardRouteProps ) => (
  <Layout isSignedIn={true}>
    <div className="dashboard">
      <h3>
        You are signed in, {username}.
      </h3>
    </div>
  </Layout>
)