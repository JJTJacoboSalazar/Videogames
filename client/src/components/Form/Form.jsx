import { useState } from "react";
import style from "./Form.module.css"
import { Validate, ValidateForm } from "./validations";
import { useNavigate } from "react-router-dom";
const Form = (props) => {

    const { platforms , genres, submitVideogame } = props

    const navigate = useNavigate()

    const [ videogameData , setVideogameData ] = useState({
        name : "",
        image : "",
        rating : 0,
        description : "",
        released: ""
    })

    const [ errors, setErrors ] = useState({
        name : "Enter the title of your video game",
        image : "Enter the URL of your video game's image",
        description : "Enter the description of your video game",
        released : "Enter the date of your video game's release",
        genres : "Select at least one genre",
        platforms : "Select at least one platform"
    })

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setVideogameData({...videogameData, [property] : value})

        Validate(property, errors, setErrors, {...videogameData, [property] : value})
    }

    const [ selectedGenres, setSelectedGenres ] = useState([])
    const handleOptionsGenre = (id_genre) => {
        setSelectedGenres((prevGenres) => {
            const updatedGenres = prevGenres.includes(id_genre)
                ? prevGenres.filter((selectedGenre) => selectedGenre !== id_genre)
                : [...prevGenres, id_genre]
            Validate("genres", errors, setErrors, updatedGenres)
            return updatedGenres
        });
    }

    const [ selectedPlatforms, setSelectedPlatforms ] = useState([])
    const handleOptionsPlatform = (platform) => {
        setSelectedPlatforms((prevPlatforms) => {
            const updatedPlatforms = prevPlatforms.includes(platform)
                ? prevPlatforms.filter((selectedPlatform) => selectedPlatform !== platform)
                : [...prevPlatforms, platform]
            Validate("platforms", errors, setErrors, updatedPlatforms)
            return updatedPlatforms
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (Object.values(errors).every(error => error === '')){
                submitVideogame({...videogameData, genres : selectedGenres, platforms : selectedPlatforms})
                setVideogameData({
                    name : "",
                    image : "",
                    rating : 0,
                    description : "",
                    released: ""
                })
                setSelectedGenres([])
                setSelectedPlatforms([])
                setErrors({
                    name : "Enter the title of your video game",
                    image : "Enter the URL of your video game's image",
                    description : "Enter the description of your video game",
                    released : "Enter the date of your video game's release",
                    genres : "Select at least one genre",
                    platforms : "Select at least one platform"
                })
                navigate("/home")
            } else {
                setErrors(ValidateForm(videogameData, selectedGenres, selectedPlatforms))
                window.alert("Please complete the form")
            }
        } 
    

    return (
        <div className={style.formContainer}>
            <form className={style.formwrap} onSubmit={handleSubmit}>
                <div className={style.formLabels}>
                    <label htmlFor="name">Name</label>
                    <input placeholder="Example: Call of Duty" type="text" name="name" value={videogameData.name} onChange={handleChange} className={style.inputName}/>
                    <p className={errors.name ? style.errorActive : style.errorDeactive}>{errors.name ? errors.name : 'Well done'}</p>
                </div>
                <div className={style.formLabels}>
                    <label htmlFor="rating">Rating</label>
                    <input type="range" name="rating" min="0" max="5" step="0.1" value={videogameData.rating} onChange={handleChange} className={style.inputRating}/>
                    <output htmlFor="rating" className={style.outputRating} >{videogameData.rating}</output>
                </div>
                <div className={style.formLabels}>
                    <label htmlFor="image">Image</label>
                    <input placeholder="Image URL" type="text" name="image" value={videogameData.image} onChange={handleChange} className={style.inputName}/>
                    <p className={errors.image ? style.errorActive : style.errorDeactive}>{errors.image ? errors.image : "Well done"}</p>
                </div>
                <div className={style.formLabels}>
                    <label htmlFor="released">Released</label>
                    <input type="date" name="released" value={videogameData.released} onChange={handleChange} className={style.inputReleased}/>
                    <p className={errors.released ? style.errorActive : style.errorDeactive}>{errors.released ? errors.released : "Well done"}</p>
                </div>  
                <div className={style.formLabels}>
                    <label htmlFor="description">Description</label>
                    <textarea placeholder="A simple description of your game!" name="description" value={videogameData.description} onChange={handleChange} className={style.inputDescription}></textarea>
                    <p className={errors.description ? style.errorActive : style.errorDeactive}>{errors.description ? errors.description : "Well done"}</p>
                </div>
                <div className={style.selectorGenre}>
                    <div className={style.selectorTitleG}>Genres</div>
                    <div className={style.optionsWrapper}> 
                        {
                            genres && genres.map((genre, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className={selectedGenres.includes(genre.id) ? style.optionActive : style.optionDeactive} 
                                        onClick={()=>{handleOptionsGenre(genre.id)}} 
                                    >
                                        {genre.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className={errors.genres ? style.errorActive : style.errorDeactive}>{errors.genres ? errors.genres : "Well done"}</p>
                </div>
                <div className={style.selectorPlatform}>
                    <div className={style.selectorTitleP}>Platforms</div>
                    <div className={style.optionsPWrapper}>
                        {
                            Array.from(platforms).map((platform, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className={selectedPlatforms.includes(platform.name) ? style.optionPActive : style.optionPDeactive} 
                                        onClick={()=>{handleOptionsPlatform(platform.name)}} 
                                    >
                                        {platform.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className={errors.platforms ? style.errorActive : style.errorDeactive}>{errors.platforms ? errors.platforms : "Well done"}</p>
                </div>
                <button className={style.submit} type="submit">
                    <span>Create</span>
                </button>
            </form>
        </div>
    )
}

export default Form