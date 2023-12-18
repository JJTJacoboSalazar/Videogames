import { Link } from "react-router-dom";
// import style from "./NavBar.module.css";

import SearchBar from "../SearchBar/SearchBar";

const Nav = ({setCurrentPage}) => {
  
  return (
    <div >
      <div >
        <a target="_blank" rel="noopener noreferrer" href='https://www.soyhenry.com/'>
          <img alt="img" src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://github.com/NicoPua'>
          <img alt="img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gonzalo-nicolas-pua-a962901b6/'>
          <img alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://es.reactjs.org/'>
          <img alt="img" src="http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png"/>
        </a>
      </div> 
      <div >
        <Link to='/home'>
            <p>🏡HOME</p>
        </Link>

        <Link to='/create'>
            <p>🎮ADD YOUR GAME</p>
        </Link>

        <Link to='/about'>
            <p>📑ABOUT</p>
        </Link>
      </div>
      
      <div>
        <SearchBar setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}
  
export default Nav;