import React, { Component } from 'react';

class Role extends Component {
  render() {
    const {
      company,
      url,
      title,
      start,
      end,
      city,
      state,
      color,
      previews,
    } = this.props.experience;
    return (
      <div className='role'>
        <h1>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={color}>
            {company}
          </a>{' '}
          <br />
          <span className='accent-text'>
          <span className='title' style={{fontWeight: "600"}} >{title}</span>
          </span>
        </h1>
        <h2 className='monospace'>
          {start} &#8212; {end} // {city}, {state}
        </h2>
        <ul>
          {previews.map((preview, index) => (
            <li key={index}>{preview}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Role;
