import error from "../../assets/img/error.jpeg"
import style from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={style.container}>
        <h2 className={style.notFoundTitle}>404 - Not Found</h2>
        <img className={style.pageNotFoundImg} src={error} alt="404 not found" />
    </div>
  )
}

export default NotFound