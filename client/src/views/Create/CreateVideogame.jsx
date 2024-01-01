import Form from "../../components/Form/Form"
import style from "./Create.module.css"

const CreateVideogame = (props) => {

    const { platforms , genres, submitVideogame } = props

    return (
        <div className={style.create}>
            <h1 className={style.title}>Create Videogame</h1>
            <Form platforms={platforms} genres={genres} submitVideogame={submitVideogame}></Form>
        </div>
    )
}

export default CreateVideogame
