import React, { Component } from 'react';
import Icons from '../../icons/icons';
import Fade from 'react-reveal/Fade';

class Footer extends Component {
  state = {};
  render() {
    const duration = 1000;
    const delay = 100;
    return (
      <div className='footer'>      
        <Fade duration={duration} delay={delay * 3}>
          <Icons />
        </Fade>
        <p align='center'> &#169; Pedro Zamora, Oct. 2020</p>
        <p align='center' style={{fontSize: "0.8em"}}>Built while watching Arrival (2016). Solid movie.</p>
      </div>
    );
  }
}

export default Footer;
