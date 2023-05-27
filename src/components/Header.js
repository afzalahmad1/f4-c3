import { useNavigate } from "react-router-dom";

const Header = () =>{

    const navigate = useNavigate();
    function signup(){
        navigate("/signup")
    }


    return(
        <div className="container">
            <p>Header</p>
            <div className="left-box">
                <p onClick={signup}>Signup</p>
                <p>Profile</p>
            </div>
        </div>
    )
}
export default Header;