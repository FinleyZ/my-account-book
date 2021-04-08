import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', Spending: 300, Income: 456 },
  { name: '2', Spending: -145, Income: 230 },
  { name: '3', Spending: -100, Income: 345 },
  { name: '4', Spending: -8, Income: 450 },
  { name: '5', Spending: 100, Income: 321 },
  { name: '6', Spending: 9, Income: 235 },
  { name: '7', Spending: 53, Income: 267 },
  { name: '8', Spending: 252, Income: -378 },
  { name: '9', Spending: 79, Income: -210 },
  { name: '10', Spending: 294, Income: -23 },
  { name: '12', Spending: 43, Income: 45 },
  { name: '13', Spending: -74, Income: 90 },
  { name: '14', Spending: -71, Income: 130 },
  { name: '15', Spending: -117, Income: 11 },
  { name: '16', Spending: -186, Income: 107 },
  { name: '17', Spending: -16, Income: 926 },
  { name: '18', Spending: -125, Income: 653 },
  { name: '19', Spending: 222, Income: 366 },
  { name: '20', Spending: 372, Income: 486 },
  { name: '21', Spending: 182, Income: 512 },
  { name: '22', Spending: 164, Income: 302 },
  { name: '23', Spending: 316, Income: 425 },
  { name: '24', Spending: 131, Income: 467 },
  { name: '25', Spending: 291, Income: -190 },
  { name: '26', Spending: -47, Income: 194 },
  { name: '27', Spending: -415, Income: 371 },
  { name: '28', Spending: -182, Income: 376 },
  { name: '29', Spending: -93, Income: 295 },
  { name: '30', Spending: -99, Income: 322 },
  { name: '31', Spending: -52, Income: 246 },
];

export default class LineChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="Income" fill="#8884d8" />
          <Bar dataKey="Spending" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
