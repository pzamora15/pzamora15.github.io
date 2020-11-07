/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Section from './components/section';
import Card from './components/card';
import { project_data } from './components/projects_data';

class Projects extends Component {
  state = {
    active: 0,
    projects: project_data
  };
  render() {
    const { projects, active } = this.state;
    return (
      <Section title='projects'>
        <p className='monospace card-nav'>
          {projects.map((year, index) => (
            <React.Fragment key={index}>
              <a
                className={
                  active === index
                    ? `year-${year.color} active year`
                    : `year-text year`
                }
                onClick={() => this.setState({ active: index })}>
                {year.header}
              </a>
            </React.Fragment>
          ))}
        </p>
        <div className='row'>
          {this.state.projects.map((year, index) => (
            active === index && year.projects.map((data, year_index) => (<Card data={data} key={year_index} />))
          ))}
        </div>
      </Section>
    );
  }
}

export default Projects;
