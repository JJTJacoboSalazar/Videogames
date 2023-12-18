// import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({id,name,genres,image,createinDb}) => {
    return(
        <div >
            {(createinDb === false)? <>
                <Link to={`/detail/${id}`}>
                    <h4>{name}</h4>
                </Link>
                <img src={image} alt="img" />
                <p>Genre: {genres.toString()}</p>
            </>:<>
                <Link to={`/detail/${id}`}>
                    <h4>{name}</h4>
                </Link>
                <img src={image} alt="img" />
                <p>Genre: {(genres.map((genre)=> genre.name)).toString()}</p>
            </>
            }   
        </div>
    )
}

export default Card;