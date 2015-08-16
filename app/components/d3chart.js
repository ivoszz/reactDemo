// d3Chart.js

import d3 from 'd3';

/*
export default class d3Chart {
  create (el, props, state) {
    const svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

    svg.append('g')
      .attr('class', 'd3-points');

    this.update(el, state);
  }

  update (el, state) {
    const scales = this._scales(el, state.domain);
    this._drawPoints(el, scales, state.data);
  }

  destroy (el) {
    // now empty
  }

  _scales (el, domain) {
    if (!domain) {
      return null;
    }

    const width = el.offsetWidth;
    const height = el.offsetHeight;

    const x = d3.scale.linear()
      .range([0, width])
      .domain(domain.x);

    const y = d3.scale.linear()
      .range([height, 0])
      .domain(domain.y);

    const z = d3.scale.linear()
      .range([5, 20])
      .domain([1, 10]);

    return {x: x, y: y, z: z};
  }

  _drawPoints (el, scales, data) {
    const g = d3.select(el).selectAll('.d3-points');

    const point = g.selectAll('.d3-point')
      .data(data, (d) => d.id);

    // ENTER
    point.enter().append('circle')
      .attr('class', 'd3-point');

    // ENTER & UPDATE
    point.attr('cx', (d) => scales.x(d.x))
      .attr('cy', (d) => scales.y(d.y))
      .attr('r', (d) => scales.z(d.z));

    // EXIT
    point.exit()
      .remove();
  }
}
*/

var d3Chart = {};

d3Chart.create = function (el, props, state) {
  var svg = d3.select(el).append('svg')
    .attr('class', 'd3')
    .attr('width', props.width)
    .attr('height', props.height);

  svg.append('g')
    .attr('class', 'd3-points');

  this.update(el, state);
};

d3Chart.update = function (el, state) {
  // Re-compute the scales, and render the data points
  var scales = this._scales(el, state.domain);
  this._drawPoints(el, scales, state.data);
};

d3Chart.destroy = function (el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

d3Chart._scales = function (el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

d3Chart._drawPoints = function (el, scales, data) {
  var g = d3.select(el).selectAll('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, function (d) { return d.id; });

  // ENTER
  point.enter().append('circle')
    .attr('class', 'd3-point');

  // ENTER & UPDATE
  point.attr('cx', function (d) { return scales.x(d.x); })
    .attr('cy', function (d) { return scales.y(d.y); })
    .attr('r', function (d) { return scales.z(d.z); });

  // EXIT
  point.exit()
    .remove();
};

export default d3Chart;
