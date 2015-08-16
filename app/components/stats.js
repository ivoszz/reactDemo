import React from 'react';

export default class Stats extends React.Component {
  propTypes () {
    data: React.PropTypes.array
  }

  renderCount (data) {
    return (
      <div className='stats-item'>
        {'Count: '}<strong>{data.length}</strong>
      </div>
    );
  }

  renderAvarage (data) {
    const sum = data.reduce((previous, current) => previous + current.z, 0);
    const avg = sum / data.length;
    return (
      <div className='stats-item'>
        {'Avarage size: '}<strong>{avg}</strong>
      </div>
    );
  }

  render () {
    return (
      <div className='Stats'>
        {this.renderCount(this.props.data)}
        {this.renderAvarage(this.props.data)}
      </div>
    );
  }
}
