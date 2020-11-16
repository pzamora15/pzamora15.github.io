import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className='footer'>
        <p align='center'> &#169; Pedro Zamora, Oct. 2020</p>
        <p align='center' style={{fontSize: "0.8em"}}>Built while watching Arrival (2016). Great movie.</p>
        <p align='center' style={{fontSize: "0.8em"}}>Inspired by <a
            href='https://shannonlau.com/'
            target='_blank'
            style={{textDecoration: 'none', color: '#6c6b6b'}}
            rel='noopener noreferrer'>
            shannonlau.com
          </a></p>
      </div>
    );
  }
}

export default Footer;
