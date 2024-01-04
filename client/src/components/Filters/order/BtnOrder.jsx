import { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './BtnOrder.module.css'
import { orderVideogames } from '../../../redux/actions'
import sort from '../../../assets/icons/sort.png'

const BtnOrder = (props) => {

    const { visibility , setVisibilityOrder , setVisibilityFilter , setVisibilitySearch } = props

    const dispatch = useDispatch()

    const handleActivation = () => {
        setVisibilityOrder(!visibility)
        setVisibilityFilter(false)
        setVisibilitySearch(false)
    }

    const [ optionSelected , setOptionSelected ] = useState("") 

    const handleOrder = (order) => {
        dispatch(orderVideogames(order))
        setOptionSelected(order)
    }

    return (
        <div className={style.wrapper}>
            <p className={style.orderTitle}>Order</p>
            <img src={sort} className={style.orderBtn } onClick={()=>{handleActivation()}} ></img>
            <div className={ visibility ? style.optionsActive : style.optionsDeactive}>
                <div className={ optionSelected == "" ? style.optionSelected : style.option} onClick={()=>{handleOrder("")}}>
                    <p>Show Default</p>
                </div>
                <div className={ optionSelected == "AZ" ? style.optionSelected : style.option } onClick={()=>{handleOrder("AZ")}}>
                    <p>Title A - Z</p>
                </div>
                <div className={ optionSelected == "ZA" ? style.optionSelected : style.option } onClick={()=>{handleOrder("ZA")}}>
                    <p>Title Z - A</p>
                </div>
                <div className={ optionSelected == "50" ? style.optionSelected : style.option} onClick={()=>{handleOrder("50")}}>
                    <p>Rating 5 - 0</p>
                </div>
                <div className={ optionSelected == "05" ? style.optionSelected : style.option } onClick={()=>{handleOrder("05")}}>
                    <p>Rating 0 - 5</p>
                </div>
            </div>
        </div>
    )
}

export default BtnOrder