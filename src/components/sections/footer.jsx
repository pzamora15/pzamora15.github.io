import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className='footer'>
        <p align='center'> &#169; Pedro Zamora, Oct. 2020</p>
        <p align='center' style={{fontSize: "0.8em"}}>Built while watching Arrival (2016). Solid movie.</p>
      </div>
    );
  }
}

export default Footer;
