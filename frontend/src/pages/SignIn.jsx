import axios from "axios";
import { useState } from "react";
import { Api } from "../apiConfig";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSignIn() {
        try {
            let response = await axios.post(Api + '/user/signin', {
                email,
                password
            })
            if (response.data.message === "success") {
                localStorage.setItem("token", response.data.token);
                navigate('/home');
            } else {
                window.alert(response.data.details);
            }
        } catch (err) {
            console.log(err);
            window.alert("Backend Error");
        }
    }

    return <div>
        <label htmlFor="email"></label>
        <input  type= "text" 
                placeholder = "john@gmail.com"
                name = "email"
                onChange= {(e)=> setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password"></label>
       <input   type= "password" 
                placeholder = "password"
                name = "password"
                onChange= {(e)=> setPassword(e.target.value)}
        /> 
        <br />
        <button onClick={handleSignIn}> SignIn</button>
    </div>
}

export default SignIn;