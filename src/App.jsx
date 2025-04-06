import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import { AuthContext } from './Context/AuthContext'
import { useContext } from 'react'

function App() {

  const { user } = useContext (AuthContext)


  return (
    <>

          <h2>Login</h2>
            <div>
              {
                !user
                ?
                <Login />
                :
                <Home />
              }
            </div>
    </>
  )
}

export default App
