type HomeRouteProps = {
  handleLogin: () => Promise<void>
}
export const Home = ({
  handleLogin
}: HomeRouteProps) => (
  <div className="App">
    <div className="header">
      <h2>
        Musician's Portal
      </h2>
      <button type="button" onClick={handleLogin}>
        Automated Sign In
      </button>
    </div>
  </div>
)
