import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export interface LoadingProps{
    loading: boolean;
}

export  function SimpleBackdrop(loadingProps:LoadingProps) {
 
  return (
    <div>
      
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingProps.loading}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}