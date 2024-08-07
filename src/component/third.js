import { Card, Typography } from '@mui/material'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,4000,5000,6000,7000];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,5000,3000,2000,1000];
const xLabels = [
  '5',
  '9',
  '11',
  '13',
  '15',
  '17',
  '19',
  '21',
  '23',
  '25',
  '27'
];

export default function Third() {
  return (
    <div className='marginSpacing'>
    <Card className='cardSecondDesign'>
     <Typography variant='h5'  className='topic'>
               <b>Activity</b> 
     </Typography>
      <BarChart
        height={300}
        series={[
          { data: pData, id: 'pvId' },
          { data: uData,  id: 'uvId' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </Card>
    </div>
  )
}
