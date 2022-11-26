import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const BannerLayerMov = () => {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
<Card sx={{ maxWidth: 345 }} className='mx-auto mt-10 pending-mov mov-card'>
     
      <CardMedia
        component="img"
        height="194"
        image="https://i.ibb.co/T8dZJm2/Picture-2.png"
        alt="Paella dish"
      />
      <CardContent>
        <p className='font-bold text-xl'>Lawyer Service Name Here</p>
       <p className='mt-2'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className='font-bold text-xl mt-2'>$100</p>
       
        <p className='mt-2'>Your Name</p>
       
      </CardContent>
      <CardActions disableSpacing>
        <p className='ml-4'>Lawyer</p>
        <p className='ml-40 bg-red-700 text-white pl-2 pr-2 pt-2 pb-2'>View More</p>
        
        
      </CardActions>
    
    </Card>
    </div>
  )
}
