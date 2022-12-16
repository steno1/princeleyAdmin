import "./chart.scss"

import { AreaChart, Area, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'January',
      total: 6790,
    },
    {
      name: 'February',
      total: 5780,
    },
    {
      name: 'March',
      total: 2980,
    },
    {
      name: 'April',
      total: 2780,
  
    },
    {
      name: 'May',
      total: 2280,
    },
    {
      name: 'june',
      total: 2750,
    },
    {
      name: 'july',
      total: 2654,
    },
  ];
  
const Chart=()=>{
    return(
        <div className="chart">
        <div className="title">Last 6 months (Revenue)</div>
 <ResponsiveContainer width="100%" aspect={2/1}>
 <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="40%" stopColor="#285430" stopOpacity={0.7}/>
      <stop offset="60%" stopColor="#3b3486" stopOpacity={0.6}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name" color="gray" stroke="gray"/>
  
  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area type="monotone" 
  dataKey="total"
   stroke="gray" 
   fillOpacity={1} 
   fill="url(#total)" />
  
</AreaChart>
      </ResponsiveContainer>
        </div>
    )
}
export default Chart;