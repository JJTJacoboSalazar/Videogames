import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Detail.module.css"
import axios from "axios"
import DetailComponent from "../../components/Detail/Detail"

const Detail = () => {

    const { id } = useParams();
    const [ videogame , setVideogame ] = useState(null);

    useEffect(()=>{
        axios(`/videogame/${id}`)
        .then((response) => {
            setVideogame(response.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })

        return (
            setVideogame(null)
        )
    }, [])

    return (
        <div className={style.detail}>
            { !videogame ? 
                <div></div> : 
                <DetailComponent videogame={videogame}></DetailComponent>
            }
        </div>
    )
}

export default Detail