import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Api } from "../apiConfig";
import axios from "axios";

function Home() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState({});

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

    return <div>
        <br />
        <input  type="text"
                placeholder="Search Movies..."
                onChange={(e)=> setSearch(e.target.value)}
        />
        &nbsp;&nbsp;
        <button onClick={handleSearch}>search</button>
        <br />
        <Movie title = { result.Title}
               runtime = { result.Runtime }
               image = { result.Poster }
        />
    </div>
}

export default Home;