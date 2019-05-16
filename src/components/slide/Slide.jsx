import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slide.css'
import img1 from '../../img/carrousel-1.jpg'
export default class Carrousel extends Component {
  render() {
    return (
      <Carousel className="carrousel" transitionTime={1000} 
      infiniteLoop useKeyboardArrows dynamicHeight showThumbs={false} autoPlay
      >
        <div className="img-1">
          <img src={img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div className="img-2">
          <img src="https://wallpaperplay.com/walls/full/4/8/5/317026.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div className="img-3">
          <img src="https://wallpaperplay.com/walls/full/4/8/5/317026.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}