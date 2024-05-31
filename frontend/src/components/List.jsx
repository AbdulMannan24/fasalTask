import { useEffect, useState } from "react";
import axios from "axios";
import { Api } from "../apiConfig";
import ListItem from "./ListItem";
import Navbar from "./Navbar";

function List({ listId, listName, refreshId }) {
    const [list, setList] = useState([]);

    function handleDelete(title) {
        setList(list.filter((element) => element.title !== title));
    }

    async function fetchList() {
        try {
            let token = 'Bearer ' + localStorage.getItem('token');
            let response = await axios.get(Api + '/movies/' + listId, { headers: { authorization: token }});
            if (response.data.message == 'success') {
                setList(response.data.result)
            } else {
                console.log(response.data.details);
            }    
        } catch (err) {
            console.log(err);
            window.alert("Backend Error");
        }
    }

    useEffect(()=> {
        fetchList();
    }, [refreshId])

    return <>
        <br />
        <h3 className="text-white text-xl text-center font-semibold"> { listName }</h3>
        <div className="flex flex-wrap justify-center text-white p-2 m-2">
            {list.length > 0 && list.map((element)=> {
                return <ListItem key={ element.title } 
                                title = { element.title } 
                                image = { element.image }
                                language = { element.language }
                                runtime = { element.runtime }
                                onDelete = { handleDelete }
                    />
            })}
        </div>
    </>
}

export default List;