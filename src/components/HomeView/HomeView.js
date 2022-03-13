// import { Container } from "@mui/material"
import "./HomeView.css";
import productos from "../../assets/img_homeview/productos.png"
import { Container } from "@mui/material";

export const HomeView = () => {
    return (
        
        <Container>
            <section className="homeView">
                <h1 className="homeView__maintitle">NUESTRA FILOSOFÍA</h1>
                <div className="homeView__container">
                    <h2 className="homeView__title">ALIMENTACIÓN CONSCIENTE</h2>
                    <p>Nos encanta ver cómo está cambiando nuestra percepción
                    con respecto a la alimentación, al cuidado de los animales y sus derechos, a la ecología y cómo se está expandiendo el veganismo
                    en el mundo. Nuestro aporte es claro y fundamental para convertirnos en el cambio que queremos ver. 
                    </p>
                    <span>Somos Felices Las Vacas. Somos Alimentación Consciente. Somos respeto por los animales. Somos amor por el mundo.</span>
                </div>
                <div className="homeView__container">
                    <h2 className="homeView__title">MISIÓN</h2>
                    <p>Brindar una opción alternativa rica, saludable para los productos lácteos.</p>
                </div>
                <div className="homeView__container">
                    <h2 className="homeView__title">VISIÓN</h2>
                    <p>Favorecer al cambio alimenticio que queremos ver a nivel mundial,<br></br>
                    Facilitando y desestigmatizando el veganismo como forma de vida.</p>
                </div>
            </section>
            
            <Container>
                <img alt="Productos" src={productos} className="homeView__photo"></img>
            </Container>

        </Container>
    )
}        