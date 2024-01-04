import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

const CardsContainer = (props) => {
    
    const { videogames} = props

    return (
        <div className={style.wrapper}>

            {
                videogames ? videogames.map((e) => {
                    return (
                        <Card
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            genres={e.genres}
                            rating={e.rating}
                        ></Card>
                    )
                }) :
                <div>Loading</div>
            }
            
        </div>
    )
}

export default CardsContainer