import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Section extends Component {
  render() {
    return (
      <Fade>
        <div className={`${this.props.title} section`} id={this.props.title}>
          <div className='section-title'>{this.props.title}</div>
          <div className='section-content'>{this.props.children}</div>
        </div>
      </Fade>
    );
  }
}

export default Section;
