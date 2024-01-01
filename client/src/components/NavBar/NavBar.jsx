import { Link, NavLink, useLocation } from "react-router-dom"
import Path from "../../auxFunctions/routesHelpers"
import style from "./NavBar.module.css"
import Order from "../Filters/order/BtnOrder"
import Filter from "../Filters/filter/BtnFilter"
import {useState } from "react"
import Search from "../SearchBar/Search"
import home from "../../assets/icons/home.png"

const NavBar = (props) => {

    const { genres, searchTerm , setSearchTerm } = props

    const { pathname } = useLocation()

    const [ search , setSearch ] = useState(false)
    const [ btnFilter , setBtnFilter ] = useState(false)
    const [ btnOrder , setBtnOrder ] = useState(false)

    return(
        <div className={style.nav}>
            { pathname === Path.Home ? 
            <div className={style.navcontainer} >
                <Link to={Path.Home} data-test-id="Home">
                        <img src={home} alt="home" className={style.homeImg}/>
                </Link>
                <NavLink to={Path.Create} className={style.createbtn}>
                    <span>Create</span>
                </NavLink>
                <Search visibility={search} setVisibilityOrder={setBtnOrder} setVisibilityFilter={setBtnFilter} setVisibilitySearch={setSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
                <div className={style.navcontainer}>
                    <Order visibility={btnOrder} setVisibilityOrder={setBtnOrder} setVisibilityFilter={setBtnFilter} setVisibilitySearch={setSearch}></Order>
                    <Filter genres={genres}visibility={btnFilter} setVisibilityFilter={setBtnFilter} setVisibilityOrder={setBtnOrder} setVisibilitySearch={setSearch}></Filter>
                    <div className={style.filterBtn}></div>
                </div>
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