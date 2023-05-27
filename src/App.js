import Header from './components/Header'
import Signup from './components/Signup'  
import Profile from './components/Profile'
import {Routes, Route}  from "react-router-dom";
import './components/Styles.css'
const App=()=>{


  return(
  <div>
    <Header />

          <Routes>
                  <Route path="/" element={<Signup />} />
                  <Route path="/profile" element={<Profile />} />
                  
          </Routes> 
    
    
  </div>
  )
}
export default App;