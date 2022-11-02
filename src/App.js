import React, { useEffect, useState } from "react";
import './App.css';
import tmdb from './tmdb';
import Movierow from './components/Movierow';

export default () => {

    const [movieList, setMovieList] = useState([]);

    useEffect (()=> {
        const loadAll = async () => {
            //Pegando a lista total
            let list = await tmdb.getHomeList();
            setMovieList(list);
        }
        loadAll();
    }, []);



    return(
        <div className="page">
            <section className="lists">
                {movieList.map((item, key) => (
                    <Movierow key={key} title={item.title} items={item.items} alt={item.original_title}/>
                ))}
            </section>
        </div>
    );
}

