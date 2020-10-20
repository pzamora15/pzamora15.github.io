import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
 
export default class Images extends Component {
    render() {
      return (
        <Carousel arrows dots>
          <img src="insta.png" />
          <img src="path.png" />
          <img src="frontend.jpg" />
        </Carousel>
      );
    }
  }