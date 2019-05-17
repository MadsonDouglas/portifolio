import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Slide.css"
import img3 from '../../../img/carrousel-1.jpg'
import img2 from '../../../img/carrousel-2.jpg'
import img1 from '../../../img/carrousel-3.jpg'
import Bottom from './BottomSlide'




export default class Carrousel extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel className="carrousel" transitionTime={1000}
          infiniteLoop useKeyboardArrows dynamicHeight showThumbs={false} autoPlay
        >
          <div className="img">
            <img src={img1} alt="developer - 1"/>
            <p className="legend">Mádson Douglas dos Santos Neves</p>
          </div>
          <div className="img">
            <img src={img2} alt="developer - 2" />
            <p className="legend">Full Stack Developer</p>
          </div>
          <div className="img">
            <img src={img3} alt="developer full stack - 3"/>
            <p className="legend">Entre em contanto S2</p>
          </div>
        </Carousel>
        <Bottom />
      </React.Fragment>
    );
  }
}