import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import icon from './../assets/pz.svg';

class Head extends Component {
  render() {
    return (
      <Helmet>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#262626' />
        <meta
          name='description'
          content="I'm Pedro Zamora, a design-driven software engineer and creator focused on building human-centered experiences. NYC-bred."
        />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <title>Pedro Zamora II</title>
        <link rel='icon' href={icon} />
        <link rel='apple-touch-icon' href={icon} />
        <script src="https://kit.fontawesome.com/c52c64df8f.js" crossorigin="anonymous"></script>
        
      </Helmet>
    );
  }
}

export default Head;
