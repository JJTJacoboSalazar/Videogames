import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { cleanGameDetail, getGameDetail } from "../../redux/actions";;



//dangerouslySetInnerHTML={{ __html: CONTENIDO }}  Para la description.
const Detail = () => {
  const useGameDetail = () => {
    const dispatch = useDispatch();
    const gameDetails = useSelector((state)=> state.gameDetails);
    const {idGame} = useParams();

    useEffect(()=>{
        dispatch(getGameDetail(idGame));
        return () => {
            dispatch(cleanGameDetail())
        }
    },[idGame])

    return gameDetails;
}

  const game = useGameDetail();
  return (
    <div>
      {game.name? (<>
        <div>
          <div>
            <h2>Game Information</h2>
            <h3>{game.name}</h3>
            <img src={game.image} alt=""/>
          </div>
  
          <div >          
            {(game.createinDb === false)? <>
              <p>ID: {game.id}</p>
              <p>Platforms: {game.platforms}</p>
              <p>Description: {game.description}</p> 
              <p>Released: {game.released}</p>
              <p>Rating: {game.rating}</p>
              <p>Genres: {game.genres}</p>
            </>:<>
              <p>ID: {game.id}</p>
              <p>Platforms: {game.platforms?.toString()}</p>
              <p>Description: {game.description.toString()}</p>
              <p>Released: {game.released}</p>
              <p>Rating: {game.rating}</p>
              <p>Genres: {(game.Genres?.map((genre)=> genre.name)).toString()}</p>
            </>}                                     
          </div>
        </div>
      </>) : (<h2>Loading...</h2>)
      }
    </div>
  );
}

export default Detail;