import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './created.module.css'
import { get_videogames } from '../../../redux/actions'

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
        dispatch(get_videogames(origin))
        setOptionSelected(origin)
    }

    const [ expanded , setExpanded ] = useState(false)

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setExpanded(true)
        }, 1000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [])

    return (
        <div className={style.wrapper}>
            <div className={ expanded ? style.originBtn : style.originBtnHide } onClick={()=>{handleActivation()}} data-tooltip="Origin"></div>
            <div className={ visibility ? style.optionsActive : style.optionsDeactive}>
                <div className={ optionSelected == "api" ? style.optionSelected : style.option} onClick={()=>{handleOrder("api")}}>
                    <p>Api</p>
                </div>
                <div className={ optionSelected == "database" ? style.optionSelected : style.option } onClick={()=>{handleOrder("db")}}>
                    <p>Database</p>
                </div>
            </div>
        </div>
    )
}

export default BtnOrigin