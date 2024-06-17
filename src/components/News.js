import React, { useState, useEffect } from 'react'
import { Spinner } from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
import { NewItem } from './NewItem'
import Noimage from '../assests/image.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { AddArticles, SetLoading, SetTotalResults, SetPage, setCategory } from '../redux/features/NewsSlice';
import axios from 'axios'

export const News = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCategory(props.category));
    }, [])

    let { articles, loading, page, totalResults, category, search } = useSelector(state => state.news);// Getting from store

    // getting 1st page data
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apikey}&page=${page}`;

        dispatch(SetLoading(true));
        try {
            const response = await axios.get(url);
            const parsedData = response.data;
            dispatch(AddArticles(parsedData.articles));
            dispatch(SetTotalResults(parsedData.totalResults));
        } catch (error) {
            console.error("Error fetching news articles:", error);
        } finally {
            dispatch(SetLoading(false));
        }
    }

    useEffect(() => {
        updateNews();
    }, [])

    // getting more data infinite sroll (pagination)
    const fetchMoreData = async () => {
        console.log("hii");
        const newPage = page + 1;
        const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${props.apikey}&page=${newPage}`;
        try {
            const response = await axios.get(url);
            const parsedData = response.data;
            console.log(parsedData);
            dispatch(AddArticles(parsedData.articles));
            dispatch(SetPage(newPage));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // searching and filtering  
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(search.toLowerCase())
        && article.title != "[Removed]"
    );

    return (
        <>
            <div style={{ height: "70px", marginTop: "9px" }}>
                <h2 className='text-center my-2' style={{ padding: '57px' }}>News-Update</h2>
            </div>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {filteredArticles.map((element) => {
                            return <div className="col-lg-4 col-md-6 col-sm-6" key={element.url}>
                                <NewItem title={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 200) : ""}
                                    imageUrl={element.urlToImage ? element.urlToImage : Noimage}
                                    newsurl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>)
}
