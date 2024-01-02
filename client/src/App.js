//app css
import './App.css'
// views
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import CreateVideogame from './views/Create/CreateVideogame';
// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
// helpers
import Path from './auxFunctions/routesHelpers';
//react, redux
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { get_genres, get_platforms, get_videogames, get_videogamesByName } from './redux/actions';
//axios
import axios from 'axios';

axios.defaults.baseURL = 'https://videogamesback-67jw.onrender.com';
function App() {

  const { pathname } = useLocation();

  const platforms = useSelector(state => state.platforms)
  const genres = useSelector(state => state.genres)
  const videogames = useSelector(state => state.home_videogames)
  const dispatch = useDispatch()

  const [ searchTerm , setSearchTerm ] = useState('')

  useEffect(()=>{
    if (platforms.length === 0) dispatch(get_platforms())
    if (genres.length === 0) dispatch(get_genres())
    if (videogames.length === 0 || searchTerm === '') dispatch(get_videogames())
    if (searchTerm != '') dispatch(get_videogamesByName(searchTerm))

    if (pathname === "/") {
      document.body.className = "landBack";
    }
    if (pathname === "/home") {
      document.body.className = "homeBack";
    }
    if (pathname.startsWith("/detail")) {
      document.body.className = "detailBack";
    }
    if (pathname === "/create") {
      document.body.className = "createBack";
    }
  }, [searchTerm, pathname])


  const submitVideogame = (videogameData) => {
    axios
      .post('/create', videogameData)
      .then((response) => {
        if (response.status === 200) {
          window.alert("Subido con Exito")
        }
      })
      .catch((error) => {
        window.alert(error.response.data.error)
      })
  }

  return (
    <div className='App'>
      {pathname !== "/" && <NavBar genres={genres} searchTerm={searchTerm} setSearchTerm={setSearchTerm}></NavBar>}
      <Routes>
          <Route path={Path.Landing} element={<Landing/>}></Route>
          <Route path={Path.Home} element={<Home/>}></Route>
          <Route path={Path.Detail} element={<Detail/>}></Route>
          <Route path={Path.Create} element={<CreateVideogame platforms={platforms} genres={genres} submitVideogame={submitVideogame}/>}></Route>
          <Route path={Path.NotFound} element={<NotFound/>}></Route>
      </Routes>
      {pathname !== "/" && <Footer/>}
    </div>  
  )
}

export default App