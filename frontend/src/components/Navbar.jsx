import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between p-3">
            <h2 className = "text-2xl text-white" onClick={ ()=> navigate('/home')}>MoviesHub</h2>
            <div>
                <button className="text-white font-semibold px-3" onClick = {()=> navigate('/createlist')}>Create List</button>
                <button className="text-white font-semibold " onClick = {()=> {
                    localStorage.setItem('token', "");
                    navigate('/signin')}}
                    > Log Out</button>
            </div>
        </div>
    )
}

export default Navbar;