import { useEffect, useState } from 'react'
import style from './Search.module.css'
import search from '../../assets/icons/search.png'

const Search = (props) => {

    const { visibility , setVisibilityOrder , setVisibilityFilter , setVisibilitySearch , searchTerm , setSearchTerm } = props

    const [ expanded , setExpanded ] = useState(false)

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setExpanded(true)
        }, 800)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [])

    const handleActivation = () => {
        setVisibilitySearch(!visibility)
        setVisibilityOrder(false)
        setVisibilityFilter(false)

    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className={style.orderContainer}>
                <img onClick={() => {handleActivation()}} data-tooltip="Search" src={search} alt="search" className={style.searchImg}/>
            <div className={ visibility ? style.inputActive : style.inputDeactive}>
                <input 
                    type='text' 
                    value={searchTerm} 
                    onChange={handleInputChange}
                    className={style.searchBar} 
                    placeholder='Search...'
                />    
            </div>
        </div>
    )
}

export default Search