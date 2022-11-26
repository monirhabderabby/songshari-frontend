import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const RunningCase = () => {
  return (
    <div>
        <h1 className='font-bold text-4xl mb-5 mt-12 ml-16'>Running Cases</h1>
        <div className='grid lg:grid-cols-3 gap-4 container ml-12 mb-4'>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'white'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
      </CardContent>
      <CardActions>
        <img src='https://i.ibb.co/PtZvMKJ/circle-check.png' className='w-8' ></img>
        <Button variant="" sx={{backgroundColor:'#E41272', color:'white'}}>Accept</Button>
        <Button variant="outlined" sx={{color:'white'}}>Reject</Button>
      </CardActions>
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'white'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
      </CardContent>
      <CardActions>
        <img src='https://i.ibb.co/PtZvMKJ/circle-check.png' className='w-8' ></img>
        <Button variant="" sx={{backgroundColor:'#E41272', color:'white'}}>Accept</Button>
        <Button variant="outlined" sx={{color:'white'}}>Reject</Button>
      </CardActions>
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'white'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
      </CardContent>
      <CardActions>
        <img src='https://i.ibb.co/PtZvMKJ/circle-check.png' className='w-8' ></img>
        <Button variant="" sx={{backgroundColor:'#E41272', color:'white'}}>Accept</Button>
        <Button variant="outlined" sx={{color:'white'}}>Reject</Button>
      </CardActions>
    </Card>
        </div>
        <div className='grid lg:grid-cols-3 gap-4 container ml-12'>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'white'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
      </CardContent>
      <CardActions>
        <img src='https://i.ibb.co/PtZvMKJ/circle-check.png' className='w-8' ></img>
        <Button variant="" sx={{backgroundColor:'#E41272', color:'white'}}>Accept</Button>
        <Button variant="outlined" sx={{color:'white'}}>Reject</Button>
      </CardActions>
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'white'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
      </CardContent>
      <CardActions>
        <img src='https://i.ibb.co/PtZvMKJ/circle-check.png' className='w-8' ></img>
        <Button variant="" sx={{backgroundColor:'#E41272', color:'white'}}>Accept</Button>
        <Button variant="outlined" sx={{color:'white'}}>Reject</Button>
      </CardActions>
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="p" sx={{fontSize:25, color:'white'}} component="div">
          Robert Jr
        </Typography>
        <Typography variant="body2" sx={{fontSize:18, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
      </CardContent>
      <CardActions>
        <img src='https://i.ibb.co/PtZvMKJ/circle-check.png' className='w-8' ></img>
        <Button variant="" sx={{backgroundColor:'#E41272', color:'white'}}>Accept</Button>
        <Button variant="outlined" sx={{color:'white'}}>Reject</Button>
      </CardActions>
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
