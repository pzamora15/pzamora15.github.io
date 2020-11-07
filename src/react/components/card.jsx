/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Images from './images';


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
      description,
      tech,
      images,
      color,
      github,
      report,
      poster,
      external,
    } = this.props.data;

    if(title === 'image_card'){
      return (<Images images={images} key={this.props.key}/>)

    }
    return (
      <div className='card' style={{margin: '0 0 20px 0'}}>
        <div className='card-content'>
          <h1 className={`accent-${color}`}>{title}</h1>
          <ul className='tags'>
            {tech.map((d) => (
              <li>{d}</li>
            ))}
          </ul>         
          
          {preview && (<p>{preview}</p>)} 
          <p>{description}</p> 
          


          <div className='icons'>
            {github && (
              <a className='icons card-icon fab fa-github' href={github} target='_blank' rel='noopener noreferrer'>
                <span style={{display: "none"}}>link</span>
              </a>                                          
            )}
            {report && (
              <a className='icons card-icon fas fa-file-pdf' href={report} target='_blank' rel='noopener noreferrer'>
                <span style={{display: "none"}}>link</span>
              </a>
            )}
            {poster && (
              <a className='icons card-icon fas fa-file-pdf' href={poster} target='_blank' rel='noopener noreferrer'>
                <span style={{display: "none"}}>link</span>
              </a>
            )}
            {external && (
              <a className='icons card-icon fas fa-external-link-alt' href={external} target='_blank' rel='noopener noreferrer'>
                <span style={{display: "none"}}>link</span>
              </a>
            )}
          </div>  

        </div>        
        
      </div>
      
    );
  }
}

export default Card;
