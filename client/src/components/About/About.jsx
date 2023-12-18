// import './about.css';
// import { useSelector } from "react-redux";
// import { Footer } from '../footer/Footer';
// import { Nav } from '../nav/Nav';


const About = () => {
    // const clase= useSelector(store => store.theme);

    return (
        <div>
        <div >
            
        <div  >
        <div >
            <div >
                    <h2>About this App</h2>
            </div>
                    <div>
                            <img src='https://assets.soyhenry.com/logoOG.png' alt=''/>
                    </div>
                    <div >
                    <span >
                        Esta SPA (Single Page Application) se desarrolló como parte del cursado de la carrera de Full Stack Developer en “Soy Henry”, en la etapa de Proyecto Individual.
                        Su objetivo es el desarrollo de una aplicación web que consume datos de una API externa y consultas a la base de datos propia.
                        <br/>
                        Características:<br/>
                        - Paginado<br/>
                        - Filtros acumulativos <br/>
                        - Ordenamientos ascendentes y descendentes<br/>
                        - Páginas con información detallada<br/>
                        - Búsqueda por nombre<br/>
                        - Formulario controlado para la creación de nuevos videojuegos<br/>
                        <br/>
                        Tecnologías empleadas:<br/>
                        - Lenguaje: JavaScript<br/>
                        - Data Base: PostgreSQL<br/>
                        - Back-End: nodeJS, ExpressJS, Sequelize<br/>
                        - Front-End: React, Redux, CSS puro<br/>
                        - Control de versiones: Git/GitHub<br/>
                        <br/>
                        Realizado por: Jacobo Salazar
                    </span>
                    </div>
                </div>
                

        </div>  
                <div >
                    
                </div>
        </div>
        </div>

    )
}

export default About;