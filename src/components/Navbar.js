import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import {ClearArticles, SetSearch} from '../redux/features/NewsSlice'
export const Navbar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    // Function to handle input change
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    dispatch(SetSearch(search))

    const handleclick = ()=>{
        dispatch(ClearArticles([]));
    }

    const handleFavorite = () =>{
        navigate('/FavoritePage')
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    News-Update
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleclick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Business" onClick={handleclick}>Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment" onClick={handleclick}>entertainment</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/general" onClick={handleclick}>general</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health" onClick={handleclick}>health</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science" onClick={handleclick}>science</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports" onClick={handleclick}>sports</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology" onClick={handleclick}>technology</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/FavoritePage" onClick={handleFavorite}>Favorites</Link></li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            onChange={handleSearch} // Update the search state on input change
                            value={search} // Bind the input value to the search state
                            placeholder="Search"
                            aria-label="Search"
                            id="searchbtn"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            id=""
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>)
}
