import React, { Component } from 'react';
import Section from './../section';
import Role from './../role';

class Experience extends Component {
  state = {
    active: 0,
    experiences: [
      {
        company: 'USHR Inc.',
        url: 'https://www.ushrauto.com/',
        title: 'Software Engineering Intern',
        start: 'May 2020',
        end: 'October 2020',
        city: 'Ann Arbor',
        state: 'MI',
        details: [
          'Utilized Python to maintain road-mapping software responsible for providing data on over 500,000 miles of road throughout North America used by the autonomous vehicle systems of Nissan, Cadillac, and Rivian. ',
          'Led initiative to refactor publishing software in anticipation for General Motors’ 2021 contract requirements, including implementation of newly requested road objects, and a 19% improvement of AWS EC2 usage.',
        ],
        color: 'blue',
      },
      {
        company: 'The University of Michigan — LSA Technology Services',
        url: 'https://lsa.umich.edu/technology-services/',
        title: 'Software Engineering Intern',
        start: 'March 2019',
        end: 'Feburary 2020',
        city: 'Ann Arbor',
        state: 'MI',
        details: [
          'Developed an AWS Lambda with Python that transforms 3,000+ customer calls each day into visualizable data for Sage, Capital One’s call assessment platform.',
          'Built and integrated experience-elevating features into Sage’s audio player platform with AngularJS and D3.js, including: dual-speaker waveform visualization to distinguish the current speaker and to enhance audio-scrubbing, call captioning to improve audio retention, and issue-tagging to flag any timestamp for future reference.',
          'Interfaced with designers, product managers, and other developers in Agile sprints to ensure functional and thoughtful user experiences across our voice-based applications.',
        ],
        color: 'green',
      },
    ],
  };
  render() {
    const { experiences, active } = this.state;
    return (
      <Section title='experience'>
        {experiences.map(
          (experience, index) =>
            <Role experience={experience} key={index} />
        )}
      </Section>
    );
  }
}

export default Experience;
