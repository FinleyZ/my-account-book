import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const pieChart = (props) => {
    const data = [
        { name: 'Group A', value: props.remaining },
        { name: 'Group B', value: props.spending }
    ];
    
    const COLORS = ['#FF8042', '#00C49F'];
    const percentages = props.remaining/(props.remaining+props.spending)
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
        }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
        }
    return (
        <PieChart width={120} height={120}>
            <Pie
            data={data}
            startAngle={0}
            labelLine={false}
            innerRadius={30}
            // label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
            >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            <text x={62} y={52} dy={8}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={props.color}
                fontWeight="bold"   
                fontSize="70%"
            >
                {`${(percentages * 100).toFixed(0)}%`}
            </text>
        </PieChart>
        );
}

export default pieChart;

