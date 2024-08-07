import { Grid, Typography } from '@mui/material'
import React from 'react'
import First from './component/first'
import Second from './component/second'
import Third from './component/third'
import Fourth from './component/fourth'
import Five from './component/five'
import Six from './component/six'

export default function MainComponent() {
  return (
    <div style={{background:'#141416'}}>
       <Typography variant='h5'  className='topic'>
               <b>Dashboard</b> 
        </Typography>

    <Grid container spacing={2} >
     <Grid item xs={12} sm={12} md={12} lg={8}>
         <First/>
     </Grid>
     <Grid item xs={12} sm={12} md={12} lg={4}>
         <Second/>
     </Grid>
     <Grid item xs={12} sm={12} md={12} lg={8}>
        <Third/>
     </Grid>
     <Grid item xs={12} sm={12} md={12} lg={4}>
         <Fourth/>
     </Grid>
     <Grid item xs={12} sm={12} md={12} lg={8}>
         <Five/>
     </Grid>
     <Grid item xs={12} sm={12} md={12} lg={4}>
        <Six/>
     </Grid>
    </Grid>
    </div>
  )
}
