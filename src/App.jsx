import SignUpForm from './components/SignUpForm'
import Authenticate from './components/authenticate'
import { useState } from 'react'
import  './App.css'

function App() {

const [token, setToken] = useState(null)

return (
  <>
   <h1>im trying</h1>
    <SignUpForm setToken={setToken} />
    <Authenticate  token={token} />
  </>
)
  
}

export default App
