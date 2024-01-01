import { Link } from "react-router-dom";
import style from "./Card.module.css"

const CardVideogame = (props) => {

    const { id , name , image , genres , rating } = props;

    return (
        <div className={style.container}>
            <Link to={`/detail/${id}`}>
                <img src={image} className={style.image} alt={name}></img>
            </Link>
            <div className={style.rating}>
                <p data-testid="rating">{rating}</p>
            </div>
            <div className={style.info}>
                <h3 className={style.name} data-testid="name">{name}</h3>
                <div className={style.genres}>
                    {genres && genres.map((genres, index) => (
                        <span key={index} data-testid="genre">{genres.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardVideogame