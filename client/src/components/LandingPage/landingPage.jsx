import { Link } from "react-router-dom";

import style from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <div className={style.container}>
            <Link className={style.btn_landing} role="button" to="/home">
                <span>Start</span>
            </Link>
        </div>
    );
}

export default LandingPage;