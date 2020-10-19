import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

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
      detail,
      tech,
      img,
      color,
      github,
      video,
      link,
    } = this.props.project;


    return (
      <div className='card'>
        <div className='card-content'>
          <h1 className={`accent-${color}`}>{title}</h1>
          <ul className='tags'>
            {tech.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
          <p>{detail}</p> 
          <button className='card-button' onClick={this.show.bind(this)}>Expand</button>
          <Rodal visible={this.state.visible} 
                 onClose={this.hide.bind(this)}
                 width={800}
                 height={800}
                 >
                <div className='card-rodal'>
                  <h1>{title}</h1>
                  <p>{detail}</p>
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
                
          </Rodal>         
        </div>        
        
      </div>
      
    );
  }
}

export default Card;
