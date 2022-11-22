import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export const FirstCard = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-6 container ml-12'>
        <Card sx={{ minWidth: 175 }} className=''>
            <div className='grid lg:grid-cols-2'>
            <CardContent>
        <Typography sx={{ fontSize: 34, fontWeight:700 }} color="text.secondary" gutterBottom>
          12
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          unread messages
        </Typography>
       
      </CardContent>
            <CardContent>
        <img src=''></img>
       
      </CardContent>
                </div> 
    </Card>
        <Card sx={{ minWidth: 175 }} className=''>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card>
        <Card sx={{ minWidth: 175 }} className=''>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card>
     
    </div>
  )
}
