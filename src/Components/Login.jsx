import { useContext} from 'react'
import { useUserState } from '../Hooks/useUserState'
import { AuthContext } from '../Context/AuthContext'

export default function Login() {
 const { emailRef, passwordRef, error, login, setError}  = useUserState()
 const {setUser} = useContext(AuthContext)
  
  const handleLogin = () => {
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     const isSuccess = login(email, password);
     if(!isSuccess)   
     {
        setError("Credenciales incorrectas");
     }else{ //fix error lab3
      setUser({email})
     }
  }

    return(
        <div>
              <input 
              type="email"
              placeholder='Correo'
              ref={emailRef}
              />
              <br/>
              <input
              type="password"
              placeholder='Contraseña'
              ref={passwordRef}
              />
              <br/>
              <button onClick={handleLogin}>Ingresar</button>
              { error && <p style={{ color: "red" }}>{error}</p> }
             </div>
          
    )
}