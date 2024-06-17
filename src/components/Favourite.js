import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import { NewItem } from './NewItem';
import Noimage from '../assests/image.jpg'

export const Favourite = () => {
    const {loading} = useSelector(state => state.news);
    const FavoriteProducts = JSON.parse(localStorage.getItem('FavoriteArray')) || [];
    
    return (
    <>
            <div style={{ height: "70px", marginTop: "9px" }}>
                <h2 className='text-center my-2' style={{ padding: '57px' }}>News-Update</h2>
            </div>
            {loading && <Spinner />}
                <div className="container">
                    <div className="row">
                        {FavoriteProducts?.map((element) => {
                            return <div className="col-lg-4 col-md-6 col-sm-6" key={element.url}>
                                <NewItem title={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 200) : ""}
                                    imageUrl={element.imageUrl ? element.imageUrl : Noimage}
                                    newsurl={element.newsurl} author={element.author} date={element.date} />
                            </div>
                        })}
                    </div>
                </div>
    </>
    )
}
