import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
export default function First() {
  return (
    <Grid container spacing={2} className='marginSpacing' >
       <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card className='cardDesign'>
           <div className='iconsalign'> 
            <LocalGroceryStoreIcon className='icnons'/>
            <Typography variant='p'>Total Orders</Typography>
           </div>
           <div className='insideCard'>
            <Typography variant='h4'><b>75</b></Typography>
            <div style={{color: '#01D191'}}>
              <ArrowDropUpIcon/>
              <Typography variant='p'>3%</Typography>
            </div>
          </div>
         </Card>
       </Grid>
       <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card className='cardDesign'>
            <div className='iconsalign'> 
            <ShoppingBagIcon className='icnons1'/>
            <Typography variant='p'>Total Delivered</Typography>
           </div>
           <div className='insideCard'>
            <Typography variant='h4'><b>70</b></Typography>
            <div style={{color: '#F15853'}}>
              <ArrowDropDownIcon/>
              <Typography variant='p'>3%</Typography>
            </div>
          </div>
         </Card>
       </Grid>
       <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card className='cardDesign'>
           <div className='iconsalign'> 
            <ProductionQuantityLimitsIcon className='icnons2'/>
            <Typography variant='p'>Total Cancelled</Typography>
           </div>
           <div className='insideCard'>
            <Typography variant='h4'><b>05</b></Typography>
            <div style={{color: '#01D191'}}>
              <ArrowDropUpIcon/>
              <Typography variant='p'>3%</Typography>
            </div>
          </div>
         </Card>
       </Grid>
       <Grid item xs={12} sm={12} md={6} lg={3}>
       <Card className='cardDesign'>
           <div className='iconsalign'> 
            <AccountBalanceIcon className='icnons3'/>
            <Typography variant='p'>Total Revenue</Typography>
           </div>
           <div className='insideCard'>
            <Typography variant='h4'><b>$12k</b></Typography>
            <div style={{color: '#F15853'}}>
              <ArrowDropDownIcon/>
              <Typography variant='p'>3%</Typography>
            </div>
          </div>
         </Card>
       </Grid>
    </Grid>
  )
}
