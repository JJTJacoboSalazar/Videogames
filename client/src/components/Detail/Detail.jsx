import style from "./Detail.module.css"
import playstationIcon from "../../assets/icons/playstation.png"
import nintendoSwitchIcon from "../../assets/icons/nintendo-switch.png"
import xboxIcon from "../../assets/icons/xbox.png"
import appleIcon from "../../assets/icons/apple.png"
import linuxIcon from "../../assets/icons/linux.png"
import pcIcon from "../../assets/icons/desktop.png"
import webIcon from "../../assets/icons/web-link.png"

const Detail = (props) => {

    const { videogame } = props

    return (
        <div className={style.generalContainer}>
            <div className={style.headerContainer}>
                <div className={style.videogameWrapper}>
                    <div className={style.genres}>
                        {videogame.genres.map((genres, index) => (
                            <span key={index} data-testid="genre">{genres.name}</span>
                        ))}
                    </div>
                    <h1 className={style.videogameName} data-testid="name">{videogame.name}</h1>
                </div>
                <h1 className={style.ratingContainer} > Rating
                    <h2 className={style.rating} data-testid="rating">{videogame.rating}</h2>
                </h1>
            </div>
            <div className={style.info}>
                <img src={videogame.image} className={style.img_wrap} alt={videogame.name} data-testid="image"></img>
                <div className={style.text_wrap}>
                    <p className={style.platforms}>Platforms:</p>
                    <div className={style.platforms_wrap}>
    {videogame.platforms.map((platforms, index) => (
        <img 
            key={index} 
            className={
                platforms.includes("Xbox") ? style.Xbox :
                    platforms === "PC" ? style.Pc : 
                        platforms === "macOS" ? style.MacOs : 
                            platforms === "Nintendo Switch" ? style.Nintendo : 
                                platforms === "Linux" ? style.Linux : 
                                    platforms === "Web" ? style.Web :
                                    platforms === "PlayStation 4" ? style.PlayStation : style.Pc
            } 
            src={
                platforms.includes("Xbox") ? xboxIcon :
                    platforms === "PC" ? pcIcon : 
                        platforms === "macOS" ? appleIcon : 
                            platforms === "Nintendo Switch" ? nintendoSwitchIcon : 
                                platforms === "Linux" ? linuxIcon : 
                                    platforms === "Web" ? webIcon :
                                    platforms === "PlayStation 4" ? playstationIcon : playstationIcon
            }
            title={platforms}
            alt={platforms}
            data-testid="platform"
        />
    ))}
</div>
                    <div className={style.description_wrap}>
                        <p className={style.textdescription} data-testid="description" >{videogame.description.slice(0, 600).replace(/<[^>]*>/g, '')}</p>
                        <p className={style.textReleased} data-testid="released" >Released at: {videogame.released}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail