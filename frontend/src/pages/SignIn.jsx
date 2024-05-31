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
        <div className="flex justify-between p-3" >
            <h2 className = "text-2xl text-white" onClick={ ()=> navigate('/')}>MoviesHub</h2>
            <div>
                <button className="text-white" onClick = {()=> {
                    localStorage.setItem('token', "");
                    navigate('/')}}
                    > Sign Up</button>
            </div>
        </div>
        <div className = "text-white pt-5">
            
            <div className="ml-10 flex justify-center text-lg shadow hover:shadow-lg">
            <div className = "pt-10">
            <h3 className = "text-2xl text-center">Sign In</h3>
            <br />
            <label htmlFor="email">Email</label>
                <br />
                <input  type= "text" 
                        placeholder = "john@gmail.com"
                        name = "email"
                        className="text-black px-1"
                        onChange= {(e)=> setEmail(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="password">Password </label>
                <br />
                <input  type= "password" 
                        placeholder = "password"
                        name = "password"
                        className="text-black px-1"
                        onChange= {(e)=> setPassword(e.target.value)}
                /> 
                <br />
                <br />
                <div className="text-center">
                    <button className = "bg-white text-black p-2 rounded" onClick={handleSignIn}> SignIn</button>
                </div>
            </div>
            </div>
        </div>
    </div>
}

export default SignIn;