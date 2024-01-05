import { useSelector } from "react-redux"
import Cards from "../../components/CardsContainer/CardsContainer"
import style from "./Home.module.css"
import { useState, useEffect} from "react"
import notfound2 from "../../assets/img/notfound2.jpg"
import Order from "../../components/Filters/order/BtnOrder"
import Filter from "../../components/Filters/filter/BtnFilter"
import Pagination from "../../components/Pagination"
import BtnOrigin from "../../components/Filters/created/created"

const Home = () => {

    const [ search , setSearch ] = useState(false)
    const genres = useSelector(state => state.genres)
    
    const [ btnFilter , setBtnFilter ] = useState(false)
    const [ btnOrder , setBtnOrder ] = useState(false)
    const [ btnOrigin , setBtnOrigin ] = useState(false)
    const videogames = useSelector(state => Array.isArray(state.home_videogames) ? state.home_videogames : [])

    
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(8);
    const lastIndex = currentPage * dataPerPage;
    const firstIndex = lastIndex -  dataPerPage;
    const parsedData = videogames?.slice(firstIndex, lastIndex);
    const visible_videogames = parsedData?.slice(0, dataPerPage);

    useEffect(() => {
       setCurrentPage(1);
      }, [btnFilter, btnOrder, BtnOrigin]);

    return (
        <div className={style.home}>
            {videogames.length === 0 ?
            <>
                <p className={style.notfoundvd}>Where did I leave your videogame?</p>
                <img className={style.notfoundvdimg} src={notfound2} alt="notfound" />

            </> :
            <>
            <div className={style.searchwrap}>
            <div className={style.navcontainer}>
                    <Order visibility={btnOrder} setVisibilityOrder={setBtnOrder} setVisibilityFilter={setBtnFilter} setVisibilitySearch={setSearch}></Order>
                </div>

            <div className={style.filtercont}>
              
             <Filter genres={genres} visibility={btnFilter} setVisibilityFilter={setBtnFilter} setVisibilityOrder={setBtnOrder} setVisibilitySearch={setSearch}></Filter>
             <BtnOrigin visibility={btnOrigin} setVisibilityOrigin={setBtnOrigin} setVisibilityOrder={setBtnOrder} setVisibilityFilter={setBtnFilter} setVisibilitySearch={setSearch}></BtnOrigin>
            <div className={style.filterBtn}></div>
            </div>
            </div>
            <Cards videogames={visible_videogames} ></Cards>
            <div className={style.paginationwrap}>
            <Pagination
            totalCount={videogames.length}
            currentPage={currentPage}
            pageSize={dataPerPage}
            onPageChange={setCurrentPage}
          />
            </div>
            </>
            }
        </div>
    )
}

export default Home
