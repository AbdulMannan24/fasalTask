import { useState } from "react";
import Navbar from "../components/Navbar";
import { Api } from "../apiConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateList() {
    const [listName, setListName] = useState("");
    const navigate = useNavigate();

    async function createList() {
        try {
            let token = 'Bearer ' + localStorage.getItem("token");
            let response = await axios.post(Api + '/list/create', { listName : listName }, { headers: { authorization: token}});
            if (response.data.message == 'success') {
                navigate('/home');
            } else {
                window.alert(response.data.details);
            }
        } catch (err) {
            console.log(err);
            window.alert("Backend Error");
        }
    }

    return <>
        < Navbar/>
        <div className="text-white flex justify-center text-xl p-20">
            <div>
                <h3> Create A List</h3>
                <br />
                <label htmlFor="listName">Name </label>
                <br />
                <input type="text" 
                       className="text-black p-1"
                       placeholder="List Name" 
                       onChange = { (e) => setListName(e.target.value)}/>
                <br />
                <br />
                <div className="text-center"> 
                    <button className = "bg-white text-black rounded p-1" onClick= { createList }> create </button>
                </div>
            </div>
        </div>
    </>
}

export default CreateList;