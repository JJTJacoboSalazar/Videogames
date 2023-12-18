import './App.css';

import LandingPage from './components/LandingPage/landingPage.jsx';
import About from "./components/About/About.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx"
import Form from './components/CreateForm/CreateForm.jsx';
import Detail from './components/Detail/Detail.jsx';

import { Route, Routes, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllGames, getAllPlatforms, getGenres } from './redux/actions';


function App() {
  const allGenres = useSelector((state)=> state.genresGames);
  const allPlatforms = useSelector((state) => state.allPlatforms);
  const [currentPage,setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  
  useEffect(() => {  
    dispatch(getAllGames());
  },[dispatch])

  useEffect(() => {  
    dispatch(getGenres());
  },[dispatch])

  useEffect(()=>{
    dispatch(getAllPlatforms());
  },[dispatch])

  const location = useLocation();
  const shouldRenderNav = location.pathname !== '/';
  return (
    <div>
      {shouldRenderNav && <Nav/>}
      <Routes>
      <Route path='/' element={<LandingPage/>} />

      <Route path="/home"
        element={<Home allGenres={allGenres} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      />

      <Route path="/about" element={<About/>}/>

      <Route path="/detail/:idGame" element={<Detail/>}/>
      
      <Route path="/create"
        element={<Form allGenres={allGenres} allPlatforms={allPlatforms}/>}
      />
      </Routes>
    </div>  
  );
}

export default App;