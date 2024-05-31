import axios from "axios";
import { Api } from "../apiConfig";
import { useState } from "react";

function Movie({ title, runtime, image, ratings, language, country, lists, onAdd }) {
    const [listId, setListId] = useState("");

    async function handleAdd (){
        try {
            let token = 'Bearer ' + localStorage.getItem('token');
            let response = await axios.post(Api + '/movies/add', {
                title,
                runtime, 
                image,
                ratings,
                language,
                country, 
                list_id : listId,
            }, { headers: { authorization : token}});
            if (response.data.message == 'success') {
                onAdd(listId);
            } else {
                window.alert(response.data.details);
            }
        } catch (err) {
            console.log(err);
            window.alert("Backend Error");            
        }
    }

    return <div>
        <br />
        <div className="flex justify-center text-white">
            <div className="text-white">
                <div className="flex justify-center">
                     <img src={image} alt=""/>
                </div>
                {(title == null? '' : <div>
                     <p> { title }  </p>
                    <p> Time: { runtime } </p>
                    <p> Origin: { country }</p>
                    <span> Language: { language } &nbsp;&nbsp; <span>Ratings: { ratings }</span></span> 
                </div>)}
            </div>
        </div>
        <br />
        <div className="flex justify-center text-white">
           {(title == null ? '' : <div>
                <label htmlFor="list"> Select List:</label>
                &nbsp;&nbsp;
                <select className="text-black" onChange={(e) => setListId(e.target.value)} defaultValue= "">
                            <option value="initial" selected>Select a list</option>
                            {lists.map(list => <option key={list.id} value={list.id}>{ list.listName }</option>)}
                </select>
                &nbsp;&nbsp;
                <button className="text-black px-1 bg-white" onClick={ handleAdd }> Add</button>
           </div>)}
        </div>
        
    </div>
}

export default Movie;