/* eslint-disable default-case */
import React, { Component } from 'react';

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://www.github.com/pedroz2',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pedroz2',
  },
  {
    name: 'Email',
    url: 'mailto:pedroz@umich.edu',
  },
];

class Icons extends Component {
  render() {
    return (
      <div>
        {socialMedia.map(({ url, name }, i) => (
          <a
            key={i}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={this.getIcon(name)}>

                <span style={{display: "none"}}>{name}</span>
          </a>
        ))}
      </div>
    );
  }

  getIcon(name) {
    switch (name) {
      case 'GitHub':
        return 'icons-hero icons fab fa-github fa-2x';
      case 'Email':
        return 'icons-hero icons fas fa-envelope fa-2x';
      case 'LinkedIn':
        return 'icons-hero icons fab fa-linkedin fa-2x';
    }
  }
}

export default Icons;
