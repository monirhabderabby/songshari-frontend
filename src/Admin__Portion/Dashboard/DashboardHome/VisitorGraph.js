//configuration
import React from 'react';
//third party components
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';



const VisitorGraph = () => {
    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'May',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Jun',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'July',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <BarChart
                width={799}
                height={419}
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
                <Legend />
                <Bar dataKey="pv" fill="#E41272" />
                <Bar dataKey="uv" fill="#8559E4" />
            </BarChart>
        </div>
    );
}

export default VisitorGraph;
