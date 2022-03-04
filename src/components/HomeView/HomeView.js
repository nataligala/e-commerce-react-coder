// import { Container } from "@mui/material"
import "./HomeView.css";
import productos from "../../assets/img_homeview/productos.png"
import { Container } from "@mui/material";

export const HomeView = () => {
    return (
        
        <>
            <section className="homeView">
                <div className="homeView__container">
                    <h2 className="homeView__title">Productos</h2>
                    <h3 className="homeView__subtitle">¿Qué tenés ganas de comer hoy?</h3>
                    <p className="homeView__description">Conocé todas nuestras opciones ricas y saludables</p>
                </div>
            </section>
            
            <Container>
                <img alt="Productos" src={productos} className="homeView__photo"></img>
            </Container>

        </>
    )
}        