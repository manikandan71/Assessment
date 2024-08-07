import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const settings = {
  width: 200,
  height: 200,
  value: 60,
};

export default function Second() {
  return (
    <div className='marginSpacing'>

    <Card className='cardSecondDesign'>
     <Grid container>
         <Grid item xs={12} sm={12} md={6} lg={6} className='gridAlign'>
           <Typography variant='p' style={{flex:1}}>Net Profit</Typography>
           <Typography variant='h4'><b>$6759.25</b></Typography>
           <div style={{color: '#01D191'}}>
                <ArrowDropUpIcon/>
                <Typography variant='p'>3%</Typography>
              </div>
         </Grid>
         <Grid item xs={12} sm={12} md={6} lg={6} className='gridAlign2'>
           <Gauge 
            value={74}
            startAngle={-1}
            style={{flex:1}}
            endAngle={360}
            innerRadius="71%"
            outerRadius="100%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#7294FF',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: '#293364',
              },
            })}
             />
              <Typography variant='caption'>*The values here has been rounded off</Typography>
     

         </Grid>
      </Grid>
     </Card>
    </div>

  )
}
