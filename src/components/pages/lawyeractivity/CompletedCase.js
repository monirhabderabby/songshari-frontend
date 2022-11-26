import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const CompletedCase = () => {
  return (
    <div>
        <h1 className='font-bold text-4xl mb-5 mt-12 ml-16'>Completed Cases</h1>
        <div className='grid lg:grid-cols-3 gap-4 container ml-12 mb-4'>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent className='grid lg:grid-cols-2'>
        <div>
            <img src='https://i.ibb.co/JsdsT72/Rectangle-714.png'></img>
        </div>
        <div>
        <Typography variant="body2" sx={{fontSize:14, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography gutterBottom variant="p" sx={{fontSize:20, color:'white'}} component="div">
          $8000
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
        </div>
      </CardContent> 
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent className='grid lg:grid-cols-2'>
        <div>
            <img src='https://i.ibb.co/JsdsT72/Rectangle-714.png'></img>
        </div>
        <div>
        <Typography variant="body2" sx={{fontSize:14, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography gutterBottom variant="p" sx={{fontSize:20, color:'white'}} component="div">
          $8000
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
        </div>
      </CardContent> 
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent className='grid lg:grid-cols-2'>
        <div>
            <img src='https://i.ibb.co/KmhRxrm/Rectangle-714-3.png'></img>
        </div>
        <div>
        <Typography variant="body2" sx={{fontSize:14, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography gutterBottom variant="p" sx={{fontSize:20, color:'white'}} component="div">
          $8000
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
        </div>
      </CardContent> 
    </Card>
        </div>
        <div className='grid lg:grid-cols-3 gap-4 container ml-12'>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent className='grid lg:grid-cols-2'>
        <div>
            <img src='https://i.ibb.co/tZS2Ldc/Rectangle-714-5.png'></img>
        </div>
        <div>
        <Typography variant="body2" sx={{fontSize:14, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography gutterBottom variant="p" sx={{fontSize:20, color:'white'}} component="div">
          $8000
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
        </div>
      </CardContent> 
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent className='grid lg:grid-cols-2'>
        <div>
            <img src='https://i.ibb.co/yRPNCbh/Rectangle-714-4.png'></img>
        </div>
        <div>
        <Typography variant="body2" sx={{fontSize:14, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography gutterBottom variant="p" sx={{fontSize:20, color:'white'}} component="div">
          $8000
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
        </div>
      </CardContent> 
    </Card>
        <Card sx={{ maxWidth: 345, backgroundColor:'#40268B', color:'white' }}>
      <CardContent className='grid lg:grid-cols-2'>
        <div>
            <img src='https://i.ibb.co/jMSTWdQ/Rectangle-714-2.png'></img>
        </div>
        <div>
        <Typography variant="body2" sx={{fontSize:14, color:'white'}} color="text.secondary">
       A example lawyer service for the married person
        </Typography>
        <Typography gutterBottom variant="p" sx={{fontSize:20, color:'white'}} component="div">
          $8000
        </Typography>
        <Typography variant="body2" sx={{color:'white'}} >
        <i class="fa-solid fa-calendar-days mt-2 mr-2"></i> September 8, 2023
        </Typography>
        </div>
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
