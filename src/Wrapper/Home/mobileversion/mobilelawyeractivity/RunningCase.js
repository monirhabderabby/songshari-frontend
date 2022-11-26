import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ProgressNav } from './ProgressNav';

export const RunningCaseMov = () => {
  return (
    <div>
        <h1 className='font-bold text-4xl mb-5 mt-12 ml-16'>Running Cases</h1>
        <div className='grid grid-cols-2 mx-auto gap-4 ml-4 mr-4'>
        <Card sx={{ maxWidth: 325, color:'black' }} className='pending-mov'>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'black'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'black'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <ProgressNav></ProgressNav>
      </CardContent>
     
    </Card>
        <Card sx={{ maxWidth: 345, color:'black' }} className='pending-mov'>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'black'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'black'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <ProgressNav></ProgressNav>
      </CardContent>
    </Card>
        <Card sx={{ maxWidth: 345, color:'black' }} className='pending-mov'>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'black'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'black'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <ProgressNav></ProgressNav>
      </CardContent>
    </Card>
        <Card sx={{ maxWidth: 345, color:'black' }} className='pending-mov'>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'black'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'black'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <ProgressNav></ProgressNav>
      </CardContent>
    </Card>
        </div>
       
    
{/* pagination  */}
<Stack className='ml-96 mt-8'>
     <div sx={{display:'flex'}}>
     <Pagination count={4} shape="rounded" />

     </div>
    </Stack>
    </div>
  )
}
