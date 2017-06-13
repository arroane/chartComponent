import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear, scaleBand } from '@vx/scale';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { AxisLeft, AxisBottom } from '@vx/axis';

//add option to add colors based on data type
//figure out if there is a better option than changing the domain for y axis

class BarGraph extends Component {
    render() {

        // Define the graph dimensions and margins
        const width = 600;
        const height = 600;
        const margin = { top: 20, bottom: 20, left: 20, right: 20 };

        // Then we'll create some bounds
        const xMax = width - margin.left - margin.right;
        const yMax = height - margin.top - margin.bottom;

        // We'll make some helpers to get at the data we want
        const x = d => d.name;
        const y = d => d.freq + d.w1 + d.w2 + d.w3;

        const y1 = d => d.freq;
        const y2 = d => d.w1;
        const y3 = d => d.w2;
        const y4 = d => d.w3;

        // And then scale the graph by our data
        const xScale = scaleBand({
            rangeRound: [0, xMax],
            domain: this.props.data.map(x),
            padding: 0.2,
        });
        const yScale = scaleLinear({
            rangeRound: [yMax, 0],
            domain: [0, Math.max(...this.props.data.map(y)) + 1.79],
            padding: 1
        });

        // Compose together the scale and accessor functions to get point functions
        const compose = (scale, accessor) => (data) => scale(accessor(data));
        const xPoint = compose(xScale, x);
        const yPoint = compose(yScale, y1);
        const yPoint2 = compose(yScale, y2);
        const yPoint3 = compose(yScale, y3);
        const yPoint4 = compose(yScale, y4);


        return (
            <svg width={width} height={height}  viewBox="0 0 600 600"
  preserveAspectRatio="xMinYMin meet">
                {this.props.data.map((d, i) => {
                    const barHeight = yMax - yPoint(d);
                    const barHeight2 = yMax - yPoint2(d);
                    const barHeight3 = yMax - yPoint3(d);
                    const barHeight4 = yMax - yPoint4(d);
                    return (
                        <Group className="barGraph" key={`bar-${i}`}>
                            <Bar
                                x={margin.left + xPoint(d)}
                                y={yMax - barHeight}
                                height={barHeight}
                                width={xScale.bandwidth()}
                                fill='#f1344b'
                            />
                            <Bar
                                x={margin.left + xPoint(d)}
                                y={yMax - barHeight2 - barHeight}
                                height={barHeight2}
                                width={xScale.bandwidth()}
                                fill='#f7b000'
                            />
                            <Bar
                                x={margin.left + xPoint(d)}
                                y={yMax - barHeight3 - barHeight2 - barHeight}
                                height={barHeight3}
                                width={xScale.bandwidth()}
                                fill='#34d71b'
                            />
                            <Bar
                                x={margin.left + xPoint(d)}
                                y={yMax - barHeight4 - barHeight3 - barHeight2 - barHeight}
                                height={barHeight4}
                                width={xScale.bandwidth()}
                                fill='#18b9dc'
                            />
                            <AxisLeft
                                scale={yScale}
                                top={0}
                                left={margin.left}
                                stroke={'#1b1a1e'}
                                tickTextFill={'#1b1a1e'}
                                numTicks={4}
                                hideTicks={true}
                                hideZero={true}
                                labelComponent={<text textAnchor="middle" fontFamily="arial" fontSize={20} fill="blue">{"hel"}</text>}
                            />
                            <AxisBottom
                                scale={xScale}
                                top={yMax}
                                left={margin.left}

                                hideTicks={true}
                            />
                        </Group>
                    );
                })}
            </svg>
        );
    }
}

BarGraph.propTypes = {
    data: PropTypes.array.isRequired
}

export default BarGraph;