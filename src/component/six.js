import { Avatar, Card, Grid, Rating, Typography } from '@mui/material'
import React from 'react'

function createData(name, rating, img, content) {
  return { name, rating, img, content };
}
const rows = [
  createData('Wade warren',4,'https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-white-shirt-posing-standing-smiling-looks-calm_155003-23821.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'),
  createData('Jane Cooper', 3,'https://img.freepik.com/premium-photo/photo-confident-indian-businesswoman-standing-with-her-arms-crossed-smiling_1025753-136063.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'),
  createData('Guy Hawkins', 5,'https://img.freepik.com/premium-photo/indian-businesswoman-standing-outdoors_926199-4038958.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'),
  createData('Kristin Waston',1,'https://img.freepik.com/premium-photo/beautiful-young-woman-posing-smiling-confident-mood_1146893-1068.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'),
  createData('Cody Fisher', 4,'https://img.freepik.com/free-photo/positive-guy-hat-sunglasses-smiling-isolated-background_197531-26959.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'),
  createData('Savannah Nguyen',3.5,'https://img.freepik.com/premium-photo/hyper-realistic-happiest-indian-handsome-man-chex-shirt-hands-up-isolated-yellow-background_862994-259319.jpg?uid=R47373505&ga=GA1.1.163288591.1722412182&semt=ais_hybrid','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'),
];

export default function Six() {
  return (
    <div className='marginSpacing'>
    <Card className='cardSecondDesign'>
     <Typography variant='h5'  className='topic'>
               <b>Customer's Feedback</b> 
     </Typography>
      
      <Grid container spacing ={2} className='sixParent'>
         {
          rows.map((row,i)=>(
            <Grid item xs={12} sm={12} lg={12} md={12} className='sixAling'>
               <div>
                <Avatar
                  src={row.img}
                 />
                 <Typography variant='h6' >
                    {row.name}
                 </Typography>
               </div>
                
               <Rating name="read-only" value={row.rating} readOnly />
               <Typography variant='p' style={{marginBottom:"30px"}}>{row.content}</Typography>
            </Grid>
          ))
         }
      </Grid>

          
    </Card>
    </div>
  )
}
