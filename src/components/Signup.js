import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
let flag = false;
const [fullName,setFullName] = useState("");
const [email,setEmail] = useState("");
const [Password,setPassword] = useState("");
const [cnfPassword,setCnfPassword] = useState("");
const [message,setMessage] = useState("");

const navigate = useNavigate();


useEffect(()=>{
  let data = JSON.parse(localStorage.getItem("user"));
  if(data!==null){
    navigate("/profile")
    return
  }
})

  function saveToLocalStorage(e){

    e.preventDefault();

    //generate tokens
    function generateToken(length) {
      var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var token = '';
      for (var i = 0; i < length; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
      }
      return token;
    }
    
    var token = generateToken(16);


    
    if(fullName.trim().length===0 || email.trim().length===0 || Password.trim().length===0 || cnfPassword.trim().length===0){
      setMessage("All the fields are mendatory")
      return;
    }else if(Password !==cnfPassword){
      setMessage("Password must be same")
      return;
    }

      setMessage("Successfully signed up")
      let user={
        "fullName" : fullName,
        "email" : email,
        "password" : Password,
        "token" : token
      }
      localStorage.setItem("user",JSON.stringify(user));
      console.log(flag);
      navigate("/profile")
  }




  return (
    <div className="signup-container">
      <form onSubmit={saveToLocalStorage}>
        <h1>Signup</h1>
        <input placeholder="Full Name"  
        id="fullName"
        onChange={(event)=> setFullName(event.target.value)}/>


        <input placeholder="Email" 
        id="email"
        onChange={(event)=> setEmail(event.target.value)}/>


        <input placeholder="Password" 
        id="password"
        onChange={(event)=>setPassword(event.target.value)}/>


        <input placeholder="Confirm Password" 
        id="cnfPassword"
        onChange={(event)=>setCnfPassword(event.target.value)}/>

        
        {message && <p style={{color: message == "Successfully signed up"?"green":"red"}}>{message}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
