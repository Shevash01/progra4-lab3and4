
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"


export default function WelcomeWidget( ){

    const { user } = useContext(AuthContext)
    return(
        <>
        <h2>WELCOME TO OUR SITE {user.email}</h2>
        </>
    )
}