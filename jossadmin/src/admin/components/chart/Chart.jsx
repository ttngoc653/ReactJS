import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey1, dataKey2, dataKey3, grid }) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{ title }</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    {dataKey1 && <Line type="monotone" dataKey={dataKey1} stroke="red" />}
                    {dataKey2 && <Line type="monotone" dataKey={dataKey2} stroke="blue" />}
                    {dataKey3 && <Line type="monotone" dataKey={dataKey3} stroke="green" />}
                    <Tooltip />
                    {grid && <CartesianGrid strokeDasharray="5 5" />}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}