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
        title: 'Software Engineer Intern',
        start: 'May 2020',
        end: 'October 2020',
        city: 'Ann Arbor',
        state: 'MI',
        previews: [
          'Utilized Python to maintain road-mapping software responsible for providing data on over 500,000 miles of road throughout North America used by the autonomous vehicle systems of Nissan, Cadillac, and Rivian. ',
          'Led initiative to refactor publishing software in anticipation for General Motors’ 2021 contract requirements, including implementation of newly requested road objects, and a 19% improvement of AWS EC2 usage.',
        ],
        color: 'link-blue',
      },
      {
        company: 'The University of Michigan - LSA Technology Services',
        url: 'https://lsa.umich.edu/technology-services/',
        title: 'Software Engineer Intern',
        start: 'March 2019',
        end: 'Feburary 2020',
        city: 'Ann Arbor',
        state: 'MI',
        previews: [
          'Developed interface between University faculty support website and IT ticketing system, allowing for a faster and more efficient response from faculty support staff regarding technology issues.',
          'Refined inventory system software and proposed its automation using Python scripts resulting in recognition for high productivity and consistent positive feedback.',
        ],
        color: 'link-green',
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
