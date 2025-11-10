import React, { useContext } from 'react'
import {UserContext} from './App.jsx'

function Login() {
  const {user, setUser} = useContext(UserContext);

    const handleBar = () => {
      setUser("vicky")
    }
    const handleBar2 = () => {
      setUser ("")
    }

   return (
    <div style={{marginTop:"10px"}}>
       <button onClick={user ? handleBar2 : handleBar }> 
        {user ?'logout' : "login to vicky " }</button>
    </div>
  )
}

export default Login

