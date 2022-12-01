import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const UsersProfile = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2 gap-2 ml-32'>
        <Card sx={{ maxWidth: 500 }}>
          <img src='https://i.ibb.co/chxqvKN/Picture.png' className='lg:max-w-lg mx-auto' alt="Not Available"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Agent Service Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 500, backgroundColor: "#FBE1FF" }}>
          <img src='https://i.ibb.co/chxqvKN/Picture.png' className='lg:max-w-lg mx-auto' alt="Not Available"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lawyer Service Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 500 }}>
          <img src='https://i.ibb.co/chxqvKN/Picture.png' className='lg:max-w-lg mx-auto' alt="Not Available"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kazi Service Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 500, backgroundColor: "#FBE1FF" }}>
          <img src='https://i.ibb.co/chxqvKN/Picture.png' className='lg:max-w-lg mx-auto' alt="Not Available"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lawyer Service Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>

  )
}
