import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import DashBoard from "./DashBoard";

// 1️⃣ Export context so other files can import it
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    // 2️⃣ Provide the context globally
    <UserContext.Provider value={{ user, setUser }}>
      <div style={ {display:"flex-coloum" , textAlign:"center"}}>
      <Navbar />
      <Login />
      <DashBoard />
      </div>
     
    </UserContext.Provider>
  );
}

export default App;

//

