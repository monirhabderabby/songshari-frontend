// import Avatar from "material-ui/Avatar";
// import React from "react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AudioAvatar() {
  return (
    <div className="absolute top-auto bottom-auto left-auto right-auto">
        <Stack direction="row">
      <Avatar
        alt="Remy Sharp"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyPoa_-TKYJdynEkGPsDbwkrzO0zRPChD6Q&usqp=CAU"
        sx={{ width: 150, height: 150 }}
      />
    </Stack>
    </div>
  );
}


// const AudioAvatar = () => {
//   return (
//     <div className="absolute top-4 left-2">
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     </div>
//   );
// };

// export default AudioAvatar;
