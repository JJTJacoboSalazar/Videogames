import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './created.module.css'
import { filterVideogames } from '../../../redux/actions'
import database from '../../../assets/icons/database.png'


const BtnOrigin = (props) => {

    const { visibility , setVisibilityOrder , setVisibilityFilter , setVisibilitySearch, setVisibilityOrigin } = props

    const dispatch = useDispatch()

    const handleActivation = () => {
        setVisibilityOrigin(!visibility)
        setVisibilityOrder(false)
        setVisibilityFilter(false)
        setVisibilitySearch(false)
    }

    const [ optionSelected , setOptionSelected ] = useState("api") 

    const handleOrder = (origin) => {
        dispatch(filterVideogames(origin))
        setOptionSelected(origin)
    }


    return (
        <div className={style.wrapper}>
            <p className={style.originTitle}>Origin</p>
            <img src={database} className={style.originBtn } onClick={()=>{handleActivation()}}></img>
            <div className={ visibility ? style.optionsActive : style.optionsDeactive}>
                <div className={ optionSelected == "api" ? style.optionSelected : style.option} onClick={()=>{handleOrder("api")}}>
                    <p>Api</p>
                </div>
                <div className={ optionSelected == "db" ? style.optionSelected : style.option } onClick={()=>{handleOrder("db")}}>
                    <p>Database</p>
                </div>
            </div>
        </div>
    )
}

export default BtnOrigin