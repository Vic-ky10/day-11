import React, { useContext } from 'react'
import {UserContext} from './App.jsx'

function Navbar() {
    const {user} = useContext(UserContext)

  return (
    <div style={{ background: "#04165eff", color: "white", padding: "10px" }}>
      <h3>MyApp</h3>
      <p>{user ? `Welcome, ${user}` : "Not logged in"}</p>
    </div>
  );
}

export default Navbar