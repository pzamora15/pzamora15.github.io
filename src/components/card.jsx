/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {visible: false};
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }


  render() {
    const {
      title,
      preview,
      expand,
      tech,
      images,
      color,
      github,
      video,
      link,
    } = this.props.project;

    const customStyles = {
      height: 'auto',
      width: '70%',
      bottom: '15%',
      top: '15%',
      'background-color': '#262626'
    };

    const customMaskStyles = {
      background: 'rgba(0,0,0,.5)'
    };


    return (
      <div className='card'>
        <div className='card-content'>
          <h1 className={`accent-${color}`}>{title}</h1>
          <ul className='tags'>
            {tech.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
          <p>{preview}</p> 
          
          {expand && (

                <div>
                  <button className='card-button link-text' onClick={this.show.bind(this)}>Expand</button>
                  <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} customStyles={customStyles} customMaskStyles={customMaskStyles}>
                        <div className='rodal-content'>
                            <div className='card-rodal-left'>
                                {
                                  images && 
                                  (<Carousel showThumbs={false} infiniteLoop={true}>
                                    { 
                                      images.map((image) => (<img className='card-rodal-image' src={image} alt={image}></img>))
                                    }
                                  </Carousel>)
                                }
                            </div>                
                            <div className='card-rodal-right'>
                                  <h1 className={`accent-${color}`}>{title}</h1>
                                  <ul className='tags'>
                                    { tech.map((d) => (<li>{d}</li>)) }
                                  </ul>
                                  
                                  <p>{expand}</p>
                                  <div className='icons'>
                                        {github && (
                                          <a className='icons fab fa-github fa-2x' href={github} target='_blank' rel='noopener noreferrer'>
                                            <span style={{display: "none"}}>github</span>
                                          </a>
                                        )}
                                        {video && (
                                          <a className='icons fab fa-github fa-2x' href={video} target='_blank' rel='noopener noreferrer'>
                                            <span style={{display: "none"}}>video</span>
                                          </a>
                                        )}
                                        {link && (
                                          <a className='icons fab fa-github fa-2x' href={link} target='_blank' rel='noopener noreferrer'>
                                            <span style={{display: "none"}}>link</span>
                                          </a>
                                        )}
                                  </div>
                            </div>                
                        </div>
                        
                  </Rodal>
                </div>
          
          )}         
        </div>        
        
      </div>
      
    );
  }
}

export default Card;
