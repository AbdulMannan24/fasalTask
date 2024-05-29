import { useEffect, useState } from "react";

function Home() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState({});

    async function fetchResult() {
        try {

        } catch (err) {
            console.log(err);
            
        }
    }

     useEffect(()=> {
        fetchResult();
     }, result)

    return <div>
        <input  type="text"
                placeholder="Search Movies..."
                onChange={(e)=> setSearch(e.target.value)}
        />
    </div>
}

export default Home;