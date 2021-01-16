import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import '../styles/Buscar.css'
import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '../c1.jpg',
    altText:'',
    caption: ''
  },
  {
    src: '../c2.jpg',
    altText: 'MACHU PICCHU ',
    caption: 'MACHU PICCHU - CUSCO - PERU'
  },
  {
    src: '../c3.jpg',
    altText: 'LAGUNA DE HUCACHINA',
    caption: 'LAGUNA DE HUCACHINA - ICA - PERU'
  }
];

const Inicio = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="600px"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="fondo ">
        <Navbar/>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className='carrucel'
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        <br/>
        <br/>
        <div className="lie">
          <h2>QUE PUEDES ENCOTRAR EN ESTA PAGINA ?</h2>
          <hr/>
          <p>Aqui podras encontrar informacion sobre lugares turisticos alrededor del mundo </p>
        </div>
        <div className="lie">
          <h2>NUESTRO OBJETIVO : </h2>
          <hr/>
          <p>Darte a conocer los diferentes atractivos turisticos que esconden el peru y el mundo para que tengas mas informacion 
            sobre el destino que elijas visitar en tus vacaciones
          </p>
        </div>
        <hr/>
        <footer className="foot">
          <div className="row mx-auto justify-content-center">
          <FaIcons.FaFacebookSquare className="logfoot"/>
          <a  className="link " style={{ textDecoration: 'none' }} target="_blank" href="https://www.facebook.com/melissa.espejo.franco"> <h6>Melissa Espejo Franco </h6> </a>
             
          </div>
          <div className="row mx-auto justify-content-center">
          <AiIcons.AiOutlineTeam  className="logfoot"/>
          <a className="link "style={{ textDecoration: 'none' }} href="asdfasdfasdfsadf"> <h6>MeiloCORP</h6> </a>
          </div>
           
           
        </footer>
    </div>
  );
}

export default Inicio;