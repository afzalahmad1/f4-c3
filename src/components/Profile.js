import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ()=>{

    const navigate = useNavigate();

    const [user,setUser] = useState({});
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("user"))
        if(data === null){
            navigate("/");
            return;
        }

        setUser(data)
    },[])


    function logOut(){
        localStorage.removeItem("user");
        navigate("/")
    }

    return(
        <div style={{padding:"10px",margin:"10px"}}>
            <h2>Profile </h2>
            <h2>Full Name:  {user.fullName}</h2>
            <h2>Email:  {user.email}</h2>
            <h2>Password:  {user.password}</h2>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}
export default Profile ;