import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Fourth() {
  return (
    <div className='marginSpacing'>
    <Card className='cardSecondDesign'>
      <Grid container spacing={2} style={{padding:'55px 0px'}}>
         <Grid item xs={12} sm={12} lg={12} className='fourthAlign'>
           <div>
            <AutoModeIcon className='fouricons'/>
            <Typography variant='h6'>Goals</Typography>
           </div>
            <ArrowForwardIosIcon className='arrowIconss'/>
         </Grid>
         <Grid item xs={12} sm={12} lg={12} className='fourthAlign'>
           <div>
            <FastfoodIcon className='fouricons1'/>
            <Typography variant='h6'>Popular Dishes</Typography>
           </div>
            <ArrowForwardIosIcon className='arrowIconss'/>
         </Grid>
         <Grid item xs={12} sm={12} lg={12} className='fourthAlign'>
           <div>
            <MenuBookIcon className='fouricons2'/>
            <Typography variant='h6'>Menus</Typography>
           </div>
            <ArrowForwardIosIcon className='arrowIconss'/>
         </Grid>
      </Grid>
 
    </Card>
    </div>
  )
}
