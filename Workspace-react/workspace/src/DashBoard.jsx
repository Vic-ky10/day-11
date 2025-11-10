import React, { useContext } from 'react'
import {UserContext} from './App.jsx'
function DashBoard() {
  const {user} = useContext(UserContext)
   return (
    <div style={{ marginTop: "10px" }}>
      <h2>Dashboard</h2>
      {user ? <p>Hi {user}, welcome back!</p> : <p>Please log in first.</p>}
    </div>
  );
}

export default DashBoard