import React from 'react'
import { useDispatch } from 'react-redux';
import { SetFavoriteProduts } from '../redux/features/NewsSlice';
import { toast } from 'react-toastify';
export const NewItem = (props) => {
    const dispatch = useDispatch();
    let { title, description, imageUrl, newsurl, author, date } = props;

    // adding to favorite
    const handlefavorite = (article) =>{
        console.log(article);
        const arrayFromLocalStorage = JSON.parse(localStorage.getItem('FavoriteArray')) || [];
        const updatedArray = [...arrayFromLocalStorage, article];
        localStorage.setItem('FavoriteArray', JSON.stringify(updatedArray));
        toast.success(' Added to favorite ');
    }
    
    return (
        <div style={{ padding: "1px", marginTop: "60px" }}>
            <div className="card" >
                <button onClick={()=>handlefavorite({imageUrl,title,description,author,newsurl,date})}>Add to Favorite</button>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}..</h5>
                    <p className="card-text">{description}..</p>
                    <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} className="btn btn-sm btn-dark">Read More..</a>
                </div>
            </div>
        </div>)
}
