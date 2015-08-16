// App.js
import React from 'react';
import Chart from 'components/chart';
import Stats from 'components/stats';

const sampleData = [
  {id: 'a1', x: 7, y: 41, z: 2},
  {id: 'a2', x: 11, y: 45, z: 3},
  {id: 'a3', x: 35, y: 18, z: 9},
  {id: 'a4', x: 91, y: 77, z: 5},
  {id: 'a5', x: 45, y: 28, z: 1},
  {id: 'a6', x: 19, y: 67, z: 4},
  {id: 'a7', x: 77, y: 25, z: 6},
  {id: 'a8', x: 63, y: 63, z: 8},
  {id: 'a9', x: 3, y: 88, z: 7},
  {id: 'b1', x: 89, y: 11, z: 2},
  {id: 'b2', x: 58, y: 80, z: 5},
  {id: 'b3', x: 25, y: 33, z: 4},
  {id: 'b4', x: 69, y: 31, z: 3},
  {id: 'b5', x: 18, y: 71, z: 1}
];

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: sampleData,
      domain: {x: [0, 30], y: [0, 100]}
    };
  }

  render () {
    return (
      <div className='App'>
        <Chart data={this.state.data} domain={this.state.domain} />
        <Stats data={this.state.data} />
      </div>
    );
  }
}
