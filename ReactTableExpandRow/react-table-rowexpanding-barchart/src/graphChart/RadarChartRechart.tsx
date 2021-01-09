
import React from 'react';
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import "./BarChartByRechart.css";


interface dataTypeValue {
    name: string;
    value: number;
}
interface RadarChartRechartProps {
    data?: dataTypeValue[];
    title?: string;
}

interface customTickProps {
    payload: any;
    x: number;
    y: number;
    textAnchor: string;
    stroke: string;
    radius: string;
    name: string;
}

//customer Tick label, 
const customTick = ({ payload, x, y, textAnchor, stroke, radius }: customTickProps) => { //payload  textAnchor x,y radius offset
    const { value } = payload;
    return (
        <g
            className="recharts-layer recharts-polar-angle-axis-tick"
        >
            <text
                radius={radius}
                stroke={stroke}
                x={x}
                y={value === 'literature' ? y - 10 : y}//'literature needs little bit topper to avoid overlap figure
                className="recharts-text recharts-polar-angle-axis-tick-value"
                textAnchor={textAnchor}
                fontSize="10"
            >
                <tspan x={x} dy="0em">
                    {value}
                </tspan>
            </text>
        </g>
    );
}

const RadarChartRechart = ({ data, title }: RadarChartRechartProps) => {
    return (
        <ResponsiveContainer >
            <div data-testid='redarChart'>
                <RadarChart cx={300} cy={150} outerRadius={100} width={500} height={500} data={data}>
                    <PolarGrid gridType='circle' />
                    <PolarAngleAxis dataKey="name" tick={customTick} />
                    <PolarRadiusAxis angle={90} domain={[0, 0.1]} />
                    <Radar dataKey="value" stroke="#8884d8" fillOpacity={0} />
                    <Legend
                        verticalAlign="top"
                        layout="vertical"
                        align="left"
                        wrapperStyle={{
                            paddingLeft: "10px",
                            fontSize: "0.5rem"
                        }}
                        content={() => <p>{title}</p>}


                    />
                </RadarChart>
            </div>
        </ResponsiveContainer>
    )
}
export default RadarChartRechart
