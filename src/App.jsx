import { BrowserRouter,Route,Routes } from "react-router-dom"

import ForYou from "./Pages/ForYou"
import Home from "./Pages/Home"
import MyProfile from "./Pages/MyProfile"
import LogIn from "./Pages/LogIn"
import Membership from "./Pages/Membership"



function App() {
 

  return (
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/foryou" element={<ForYou/>}/>
      <Route path="/profile" element={<MyProfile/>}/>
      <Route path="login" element={<LogIn/>}/>
      <Route path="/membership" element={<Membership/>}/>
     
      
     </Routes>
     </BrowserRouter>
       
    </>
  )
}

export default App
