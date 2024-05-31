import axios from 'axios';
import { Api } from '../apiConfig';

function ListItem({title, image, runtime, language, onDelete}) {

    async function handleDelete() {
        try {
            let token = 'Bearer ' + localStorage.getItem('token');
            let response = await axios.delete(Api + '/movies/delete/' + title, {
                headers: { authorization: token}
            })
            if (response.data.message === 'success') {
                onDelete(title);
            } else {
                window.alert(response.data.details);
            }
        } catch (error) {
            console.log(error);
            window.alert('Backend Error');
        }
    }

    return <>
        <div className='px-5'>
            <div>
                <img className='object-contain w-45 h-45' src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{runtime}</p>
                <p>{language}</p>
                <br />
               <div className='flex justify-center'>
                 <button className = "text-black bg-white rounded p-1" onClick = {handleDelete}>Delete</button>
               </div>
            </div>
            <br />
        </div>
    </>
}

export default ListItem;