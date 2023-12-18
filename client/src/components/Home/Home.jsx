import Card from "../../components/Card/Card.jsx";
// import style from "./Home.module.css"   //CSS

import Paginado from "../../components/Pagination/Pagination.jsx";
import Filters from "../../components/Filters/Filters.jsx";

import { useState } from "react";
import { useSelector } from "react-redux";

const Home = ({allGenres,currentPage,setCurrentPage}) => {
    const games = useSelector((state) => state.filterGames);
    const filterInfo = useSelector((state)=> state.filterInfo);
    //Paginado----------------------------------------------------------
    const [gamesPag] = useState(15);    
    const lastGameIndex = currentPage * gamesPag;
    const firstGameIndex = lastGameIndex - gamesPag;
    const currentGames = games.slice(firstGameIndex,lastGameIndex); 
    //-------------------------------------------------------------------

    return (
        <div > 
            <div>
                <Filters allGenres={allGenres} setCurrentPage={setCurrentPage} filterInfo={filterInfo}/>
            </div>

            <div >
                <div >
                    <h2>🕹️ Videogames:</h2>
                    <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} cantGames={games.length} gamesPag={gamesPag} />
                </div>
                <div >
                    {games.length !== 0? currentGames.map(({id,name,genres,Genres,image,rating,createinDb}) => {
                        return(
                            <Card
                                key={id}
                                id={id}
                                name={name? name : "Videogame Name"}
                                genres={createinDb === true ? Genres : genres}
                                image={image}
                                rating={rating}
                                createinDb={createinDb}
                            />
                        );
                    }): (games.length === 0 && (filterInfo.length !== 0))
                    ? 
                        <div><h2>There are no video games with those filters applied.</h2></div>
                    : 
                        <div>
                            <h2>Loading...</h2>
                            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="gif"/>
                        </div>  
                    }
                </div>    
            </div>
        </div>
    )
}
  
export default Home;