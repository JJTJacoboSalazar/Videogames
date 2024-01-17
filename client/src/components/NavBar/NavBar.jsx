import { Link, NavLink, useLocation } from "react-router-dom"
import Path from "../../auxFunctions/routesHelpers"
import style from "./NavBar.module.css"
import {useState } from "react"
import home from "../../assets/icons/home.png"
import Search from "../SearchBar/Search"

const NavBar = (props) => {

    const { searchTerm , setSearchTerm } = props

    const { pathname } = useLocation()

    const [ search , setSearch ] = useState(false)
    const [ btnFilter , setBtnFilter ] = useState(false)
    const [ btnOrder , setBtnOrder ] = useState(false)

    return(
        <div className={style.nav}>
            { pathname === Path.Home ? 
            <div className={style.navcontainer} >
                {!search && 
                <NavLink to={Path.Create} className={style.createbtn}>
                    <span>Create</span>
                </NavLink>
                }

                <Search visibility={search} setVisibilityOrder={setBtnOrder} setVisibilityFilter={setBtnFilter} setVisibilitySearch={setSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>

            </div>
            :
            <div className={style.container}>
                <Link to={Path.Home}>
                <img src={home} alt="home" className={style.homeImg}/>
                </Link>
            </div>
            }
            
        </div>
        
     )

 }
export default NavBar