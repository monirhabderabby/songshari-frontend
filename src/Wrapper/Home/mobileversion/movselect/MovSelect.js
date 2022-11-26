import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';

export const MovSelect = () => {
  const [profile,setProfile] = useState(false);
const handleClick = () => {
console.log('clicked');
setProfile(true);
}
const [age, setAge] = React.useState('');


  return (
    <div>
        <Box sx={{ minWidth: 155, backgroundColor:'white', border:'1px solid white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">shongshari.com</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
        
        >
          <Link to='/login'><MenuItem value={10}>Ten</MenuItem></Link>
          
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

    </div>
  )
}
