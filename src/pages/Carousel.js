import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/carosel.css";
import "../styles/Home.css";
import Tiendapokemon from "../assets/Tiendapokemon.webp";
import PizzeriaCrud from "../assets/PizzeriaCrud.webp";
import Juego from "../assets/Juego.webp";



export default function Carruselv2() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1350, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="App text-center">
      <div className="about1">
        <h2>Projects</h2>
      </div>
      <Carousel responsive={responsive}>

        <div className="card">
          <img
            className="product--image "
            src={Tiendapokemon}
            alt=""
          />
          <button>
            <a href="https://Robin0311.github.io/Tienda-front" target={"_blank"}>
            Tienda Pokemon
            </a> 
            </button>
        </div>

        <div className="card">
          <img
            className="product--image"
            src={PizzeriaCrud}
            alt=""
          />
          <button><a href="https://robin0311.github.io/proyecto2.github.io/" target={"_blank"} > Pizzeria CRUD</a></button>
        </div>

        <div className="card">
          <img
            className="product--image"
            src={Juego}
            alt=""
          />
          <button><a href="https://robin0311.github.io/SpaceInvaders.github.io/" target={"_blank"} >Juego space</a></button>
        </div>
        
        <div className="card">
          <img
            className="product--image"
            src={Tiendapokemon}
            alt=""
          />

          <button><a href="https://robin0311.github.io/restaurantetuiquisia/" target={"_blank"} > Restaurante </a></button>
        </div>

      </Carousel>
    </div>
  );
}
