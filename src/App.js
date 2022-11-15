import React, { useEffect, useState } from "react";
import './App.css';
import tmdb from './tmdb';
import Movierow from './components/Movierow';
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect (()=> {
        const loadAll = async () => {
            //Pegando a lista total
            let list = await tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);

        }
        loadAll();
    }, []);


    useEffect(() =>{
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            } else{
                setBlackHeader(false);
            }

        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    }, []);



    return(
        <div className="page">
            
            <Header black={blackHeader} />

            {featuredData &&
            <FeaturedMovie item = {featuredData}/>
            }
            <section className="lists">
                {movieList.map((item, key) => (
                    <Movierow key={key} title={item.title} items={item.items} alt={item.original_title}/>
                ))}
            </section>

            <footer>
                Feito com amor <span role="img" aria-label="coração">❤️</span> por Bonieck Douglas<br/>
                Direitos de imagem para Netflix<br/>
                Dados pegos do site Themoviedb.org
            </footer>

            {movieList.length <= 0 &&
            <div className="loading">
                <img src="https://rchandru.com/images/portfolio/loading.gif" alt="Carregando" />
            </div>
            }
        </div>
    );
}

