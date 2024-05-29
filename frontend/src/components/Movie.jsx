import axios from "axios";
import { Api } from "../apiConfig";

function Movie({ title, runtime, image, ratings, language, country }) {
    async function handleAdd (){
        try {
            let response = await axios.post(Api + '/movies/add', {

            })

        } catch (err) {
            console.log(err);
            window.alert("Backend Error");            
        }
    }

    return <div>
        <div>
            <div>
                <img src={image} alt="" />
                <p>{title} </p>
                <p>{runtime} </p>
            </div>
            <div>
                
            </div>
        </div>
        <div>
           
        </div>
        <button onClick={ handleAdd }>Add to List</button>
    </div>
}

export default Movie;