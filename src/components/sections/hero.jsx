/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Icons from '../icons';
import {Link} from 'react-scroll';
import Fade from 'react-reveal/Fade';

class Hero extends Component {
  state = {};
  render() {
    const duration = 1000;
    const delay = 100;

    return (
      <React.Fragment>
        <div className='hero'>
          <div className='hero-content'>
            <Fade duration={duration}>
              <img style={{height: "200px", width: "200px", borderRadius: "50%"}}src='./../../pz.jpg' alt='profile'></img>
            </Fade>
            <Fade duration={duration} delay={delay}>
              <h1 className='hero-text'>
                Hi! I'm <span className='name'>Pedro Zamora</span>, a Junior at the{' '}
                <a
                  className='link-yellow'
                  href='https://cse.engin.umich.edu/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  University of Michigan
                </a>{' '}studying Computer Science and minoring in Business.{' '}
              </h1>
            </Fade>
            <Fade duration={duration} delay={delay * 2}>
              <h2 className='hero-text'>
                I'm currently looking for 2021 SWE internships. Check out my{' '}
                <a
                  className='link-green'
                  href='/pedroz_resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  resume
                </a>{' '}
                and let's talk:{' '}
                <a
                  className='link-red'
                  href='mailto:pedroz@umich.edu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  pedroz@umich.edu
                </a>
              </h2>
            </Fade>
            <Fade duration={duration} delay={delay * 3}>
              <Icons />
            </Fade>
          </div>
          <Fade duration={duration} delay={delay * 4}>
            <a href='' className="icon-scroll">
              <Link
                activeClass=""
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
            >            
              <i className="icons fas fa-arrow-down fa-2x"></i>            
            </Link></a>
          </Fade>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Hero;
