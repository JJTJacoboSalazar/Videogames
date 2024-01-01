import { Link, NavLink } from "react-router-dom";
import s from "./Landing.module.css"
import buttonSound from "../../assets/sound/energy.wav"
import henry from "../../assets/img/henry.png"

function Landing() {
   const handleClick = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  }

    return (
      <div className={s.fondo}>
        <div className={s.inicio}>
          <h1 className={s.titletext} data-text="title">Videogames</h1>
             <div className={s.henrycontainer}>
          <img className={s.henry} src={henry} alt="soyHenry" />
             </div>
  
          <NavLink className={s.btn_landing} role="button" to="/home" onClick={handleClick}>
            <span>Start</span>
             </NavLink>
             <div className={s.message}>
          <p>Press Start to go to Home</p>
             </div>
        <h3>By Jacobo Salazar</h3>
        </div>
        <div className={s.cubo}>
          <div className={s.juegos2}></div>
          <div className={s.juegos1}></div>
        </div>
      </div>
    );
  }
  

export default Landing