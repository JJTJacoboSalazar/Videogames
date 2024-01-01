import { useSelector } from "react-redux"
import Cards from "../../components/CardsContainer/CardsContainer"
import style from "./Home.module.css"
import { useState } from "react"
import notfound2 from "../../assets/img/notfound2.jpg"

const Home = () => {

    const videogames = useSelector(state => Array.isArray(state.home_videogames) ? state.home_videogames : [])

    const [ page, setPage ] = useState(1);
    const videogamesPerPage = 10;
    const totalPages = Math.ceil(videogames.length / videogamesPerPage)

    const indexLastVideogame = page * videogamesPerPage;
    const indexFirstVideogame = indexLastVideogame - videogamesPerPage;
    
    const visible_videogames = videogames.slice(indexFirstVideogame, indexLastVideogame);

    const handlePageChange = (page) => {
        setPage(page);
    }

    const pageNumbers = Array.from({ length : totalPages }, ( _ , index) => index + 1)

    return (
        <div className={style.home}>
            {videogames.length === 0 ?
            <>
                <p className={style.notfoundvd}>Where did I leave your videogame?</p>
                <img className={style.notfoundvdimg} src={notfound2} alt="notfound" /> 
            </> :
            <>
            <Cards videogames={visible_videogames} ></Cards>
            <div className={style.paginationwrap}>
                {
                    pageNumbers.map((pageNumber, index) => {
                        return (
                            <button
                                key={index}
                                onClick={()=> handlePageChange(pageNumber)}
                                className={ pageNumber === page ? style.btnPagesActive : style.btnPages}
                            >
                                {pageNumber}
                            </button>
                        )
                    })
                }
            </div>
            </>
            }
        </div>
    )
}

export default Home
