import React, { Component } from 'react';
import Section from './../section';

class About extends Component {
  state = {};
  render() {
    return (
      <Section title='about'>
        <p>
          Hello! I’m Pedro, a budding software engineer who loves rock climbing, frisbee, and dogs. 
          I'm currently exploring the field of Computer Science at the{' '}
          <a
            href='https://umich.edu/'
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            University of Michigan
          </a>, where I've had the pleasure to meet countless wonderful people and some amazing opportunities.    
          I like to tinker with software, experience new challenges, and am highly-skilled at googling things.
        </p>
        <p>
          Recently, I finished my Software Engineering internship at{' '}
          <a
            href='https://www.ushrauto.com/'
            className='link-red'
            target='_blank'
            rel='noopener noreferrer'>
            USHR Inc.
          </a>, where I was responsible for developing and maintaining the road-mapping software that powers the autonomous vehicle systems of Nissan, Cadillac, and Rivian.
        </p>{' '}
        <p>
          When I’m not coding, I am usually hanging out with the Michigan{' '}
          <a
            href='http://www.umich.edu/~climbing/index.html'
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            Rock Climbing Club
          </a>. Outside of that, I like to take photos, hike, and talk tech with my friends.
        </p>
      </Section>
    );
  }
}

export default About;
