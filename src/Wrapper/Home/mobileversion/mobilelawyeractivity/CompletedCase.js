import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export const CompletedCaseMov = () => {
  return (
    <div>
        <h1 className='font-bold text-4xl mb-5 mt-12 ml-16'>Completed Cases</h1>
       
     <div className='grid grid-cols-2 mx-auto gap-4 ml-4 mr-4'>
     <Card sx={{ maxWidth: 345 }} className='pt-12 pb-12'>
      <div className='grid grid-cols-2'>
<div>
<img src='https://i.ibb.co/fHVmtP6/Rectangle-714-6.png' className='w-20 ml-4'></img>
</div>

<div>
<p className='font-bold text-lg mb-2'>Example of lawyer name</p>
<p className='font-bold text-xl text-red-500 mb-2'>$ 8000</p>
<p>2h 44m</p>
</div>
      </div>
    
     
    </Card>
     <Card sx={{ maxWidth: 345 }} className='pt-12 pb-12'>
      <div className='grid grid-cols-2'>
<div>
<img src='https://i.ibb.co/fHVmtP6/Rectangle-714-6.png' className='w-20 ml-4'></img>
</div>

<div>
<p className='font-bold text-lg mb-2'>Example of lawyer name</p>
<p className='font-bold text-xl text-red-500 mb-2'>$ 8000</p>
<p>2h 44m</p>
</div>
      </div>
    
     
    </Card>
     <Card sx={{ maxWidth: 345 }} className='pt-12 pb-12'>
      <div className='grid grid-cols-2'>
<div>
<img src='https://i.ibb.co/fHVmtP6/Rectangle-714-6.png' className='w-20 ml-4'></img>
</div>

<div>
<p className='font-bold text-lg mb-2'>Example of lawyer name</p>
<p className='font-bold text-xl text-red-500 mb-2'>$ 8000</p>
<p>2h 44m</p>
</div>
      </div>
    
     
    </Card>
     <Card sx={{ maxWidth: 345 }} className='pt-12 pb-12'>
      <div className='grid grid-cols-2'>
<div>
<img src='https://i.ibb.co/fHVmtP6/Rectangle-714-6.png' className='w-20 ml-4'></img>
</div>

<div>
<p className='font-bold text-lg mb-2'>Example of lawyer name</p>
<p className='font-bold text-xl text-red-500 mb-2'>$ 8000</p>
<p>2h 44m</p>
</div>
      </div>
    
     
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
