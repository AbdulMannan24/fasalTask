import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Api } from "../apiConfig";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import List from "../components/List.jsx";

function Home() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState({});
    const [lists, setLists] = useState([]);
    const [refreshId, setRefreshId] = useState(0);
    const navigate = useNavigate();

    async function handleSearch() {
        try {
            let response = await axios.get(Api + '/movies/search/:' + search);
            if (response.data.message == "success") {
                setResult(response.data.result);
            } else {
                window.alert(response.data.details);
            }
        } catch (err) {
            console.log(err);
            window.alert(response.data.details);
        }
    }

    async function fetchList() {
        try {
            let token = 'Bearer ' + localStorage.getItem("token");
            let response = await axios.get(Api + '/list', { headers: { authorization: token}});
            if (response.data.message == "success") {
                setLists(response.data.result);
            } else {
                window.alert(response.data.details);
            }
        } catch (err) {
            console.log(err);
            window.alert(response.data.details);
        } 
    }

    function onAdd() {
        setRefreshId((refreshId == 0 ? 1: 0));
    }

    useEffect(()=> {
        fetchList();
    }, [])

    return <div>
        <Navbar/>
        <br />
        <div className="text-center text-white">

            <input  type="text"
                    placeholder="Search Movies..."
                    className= "p-1 mx-2 text-black rounded w-1/3"
                    onChange={(e)=> setSearch(e.target.value)}
            />
            &nbsp;&nbsp;
            <button className="bg-white text-black rounded p-1 font-semibold" onClick={ handleSearch }>search</button>
        </div>
        
        <Movie title = { result.title }
               runtime = { result.runtime }
               language= { result.language }
               country= { result.country }
               image = { result.image }
               ratings = { result.ratings }
               lists = { lists }
               onAdd = { onAdd }
        />

        { lists.map((list) => {
            return <List listId = { list.id } listName = { list.listName } refreshId = {refreshId}/>
        })}
    </div>
}

export default Home;