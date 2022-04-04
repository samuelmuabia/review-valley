
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const[datas,setData]=useState([])
  useEffect(()=>{
      fetch("data.json")
      .then(res=>res.json())
      .then(data=>setData(data));
  },[])
    return (
<div style={{height:"90vh"}} className='d-flex justify-content-space-between align-items-center'>
       <div>
        <h1 className='text-primary text-center'>Month Wise Sell</h1>
       <LineChart
        width={400} height={400}
        data={datas}>
            <Line dataKey={'sell'}></Line>
            <Line dataKey={'month'}></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
       </div>
        <div>
        <h1 className='text-primary text-center'>Investment vs Revenue</h1>
        <BarChart width={400} height={400} data={datas}>
        <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
         </BarChart>
        </div>
</div>
    );
};

export default Dashboard;