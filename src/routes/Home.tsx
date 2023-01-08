import { automatedLogin } from "../services/api-service"

export const Home = ({
  setToken = (_t : string) => null
}) => {
  const handleLogin = async () => {
    console.log("Loggin in!")
    const { token } = await automatedLogin()
    console.log(token)
    setToken(token)
  }
  return (
    <div className="App">
      <div className="header">
        <h2>
          Musician's Portal
        </h2>
        <button type="button" onClick={handleLogin}>
          Automated Sign In
        </button>
      </div>
      <footer>Code Whisperer</footer>
    </div>
  )
}