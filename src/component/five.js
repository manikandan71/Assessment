import { Card, Chip, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
function createData(name, calories, fat, carbs,image) {
  return { name, calories, fat, carbs,image };
}

const rows = [
  createData('Wade warren', 1547890, '$124.00', 'Delivered','https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-white-shirt-posing-standing-smiling-looks-calm_155003-23821.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid'),
  createData('Jane Cooper', 2379099, '$365.02', 'Delivered','https://img.freepik.com/premium-photo/photo-confident-indian-businesswoman-standing-with-her-arms-crossed-smiling_1025753-136063.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid'),
  createData('Guy Hawkins', 2620093, '$45.88', 'Cancelled','https://img.freepik.com/premium-photo/indian-businesswoman-standing-outdoors_926199-4038958.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid'),
  createData('Kristin Waston',2222051, '$65.00', 'pending','https://img.freepik.com/premium-photo/beautiful-young-woman-posing-smiling-confident-mood_1146893-1068.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid'),
  createData('Cody Fisher', 3569876, '$545.00','Delivered','https://img.freepik.com/free-photo/positive-guy-hat-sunglasses-smiling-isolated-background_197531-26959.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid'),
  createData('Savannah Nguyen', 9870341, '$128.20', 'Delivered','https://img.freepik.com/premium-photo/hyper-realistic-happiest-indian-handsome-man-chex-shirt-hands-up-isolated-yellow-background_862994-259319.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid'),
];

export default function Five() {
  return (
    <div className='marginSpacing'>
    <Card className='cardSecondDesign'>
     <Typography variant='h5'  className='topic'>
               <b>Recent Orders</b> 
     </Typography>

     <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> 
              <Typography variant='h6' style={{color:"white"}}>Customer</Typography>  
            </TableCell>
            <TableCell align="right"> <Typography variant='h6' style={{color:"white"}}> Order No.</Typography></TableCell>
            <TableCell align="right"> <Typography variant='h6' style={{color:"white"}}> Amount</Typography></TableCell>
            <TableCell align="right"> <Typography variant='h6' style={{color:"white"}}> Status</Typography> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{display:'flex',alignItems:'center',gap:"5px"}}>
                <Avatar
                  src={row.image}
                />
                <div>
                 {row.name}
                </div>
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">
               <Chip label={row.carbs} className={row.carbs == 'Delivered' ? 'succesd' :'fails'}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
    </Card>
    </div>
  )
}
