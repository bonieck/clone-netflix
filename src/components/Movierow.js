import React, { useState } from "react";
import './Movierow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);
    const handleLeftArrow = () => {
        let x = scrollX + 250;
        //let x = scrollX + Math.roud(window.innerWidth /2); mover de uma vez
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - 250;
        let listW = items.results.length * 250;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth -listW) -60;
        }
        setScrollX(x);
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>


            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}>
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <div key={key} className="movieRow--item">
                        <img src={`http://image.tmdb.org./t/p/w300${item.poster_path}`} />
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    );
}