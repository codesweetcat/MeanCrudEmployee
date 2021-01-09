
import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Label
} from 'recharts';
import "./BarChartByRechart.css";


interface dataTypeValue {
    name: string;
    value: number;
}
interface IProps {
    data?: dataTypeValue[];
}


const BarChartByRechart = ({ data }: IProps) => {
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 35, right: 30, left: 20, bottom: 70,
            }}
            className={'barChart'}
        >
            <CartesianGrid strokeDasharray="1 5" />

            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 10 }} >
                <Label position="bottom" offset={50} className={'label '} value="Data types" style={{ textAnchor: 'middle' }} />

            </XAxis>

            <YAxis tick={{ fontSize: 10 }} type="number">
                <Label className={'label'} value="Association Score vs Data type" offset={20} position="top" style={{ textAnchor: 'start' }} />

                <Label className={'label'} value="Scores" offset={20} position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    )
}
export default BarChartByRechart
