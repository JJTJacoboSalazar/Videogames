import style from "./Footer.module.css";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import gmail from "../../assets/img/gmail.png";
import GitHub from "../../assets/img/github.png";
import { Link } from "react-router-dom";
import Path from "../../auxFunctions/routesHelpers";
import powerOn from "../../assets/icons/power-on.png";


const Footer = () => {
  return (
    <div className={style.conteinergeneralfooterdark}>
      <div className={style.conteinerfooterdark}>
        <div className={style.footertitle}></div>
        <div className={style.conteinerspan}>
            <div className="footer-redes">
          <br />
          <div className={style.linkBtn}>
          <Link to={Path.Landing}>
           <img className={style.power} src={powerOn} alt="image" />
                        
            </Link>
          <a
            href="https://github.com/JJTJacoboSalazar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.logosredes} src={GitHub} alt="GitHub"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/jacobo-salazar-8902b3280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.logosredes} src={LinkedIn} alt="LinkedIn"></img>
          </a>
          <a
            href="https://www.instagram.com/jacobwhatever7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.logosredes} src={Instagram} alt="Instagram"></img>
          </a>
          <a href="mailto:tadeo.jacobo6@gmail.com">
            <img className={style.logosredes} src={gmail} alt="gmail"></img>
          </a>
            </div>
          <br />
          </div>
        
        </div>
      </div>
          <div className={style.copy}>
          <p className={style.footercopy}>
          Copyright &copy; 2023 All Rights Reserved by Jacobo Salazar
          </p>

          </div>
    </div>
  );
};

export default Footer;