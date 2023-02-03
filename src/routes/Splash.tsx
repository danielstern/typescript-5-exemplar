import { Layout } from "../components/Layout"

type SplashProps = {
  handleLogin? : ()=>Promise<void>
}
export const Splash = ({
  handleLogin
} : SplashProps ) => (
  <Layout handleLogin={handleLogin}>
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
  </Layout>
)