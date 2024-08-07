import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

export default function SideBar() {
  return (
    <div className='sideBardesing' >
         <HomeOutlinedIcon className='icnonSizeActive'/>
         <AssessmentOutlinedIcon className='icnonSize' />
         <EventAvailableOutlinedIcon className='icnonSize'/>
         <AccountBalanceWalletOutlinedIcon className='icnonSize'/>
         <ShoppingBagOutlinedIcon className='icnonSize'/>

    </div>
  )
}
