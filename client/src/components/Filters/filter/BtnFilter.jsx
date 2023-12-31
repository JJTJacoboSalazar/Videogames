import { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './BtnFilter.module.css'
import { filterVideogames } from '../../../redux/actions'
import filter from '../../../assets/icons/filter.png'

const BtnFilter = (props) => {

    const { genres, visibility , setVisibilityOrder , setVisibilityFilter , setVisibilitySearch, showAllOnly } = props

    const dispatch = useDispatch()

    const handleActivation = () => {
        setVisibilityFilter(!visibility)
        setVisibilityOrder(false)
        setVisibilitySearch(false)

    }

    const [ optionSelected , setOptionSelected ] = useState("Default")

    const handleFilter = (genre) => {
        dispatch(filterVideogames(genre))
        setOptionSelected(genre)
    }


    return (
        <div className={style.wrapper}>
                <p className={style.filterTitle}>Filters</p>
                <img onClick={()=>{handleActivation()}} src={filter} alt="filter" className={style.filterImg} data-tooltip="Filter"/>
            <div className={ visibility ? style.optionsActive : style.optionsDeactive}>
                <div className={ optionSelected == "Default" ? style.optionSelected : style.option } onClick={()=>{handleFilter("Default")}}>
                    <p>Show All</p>
                </div>
                {
                    genres && genres.map((e, index) => {
                        return (
                            <div className={ optionSelected == e.name ? style.optionSelected : style.option } key={index} onClick={()=>{handleFilter(e.name)}}>
                                <p>{e.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default BtnFilter