import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.css'

export default function CircularUnderLoad() {
  return (
    <div className='loader'>
        <CircularProgress className="loader" sx={{color: '#95C11F'}} disableShrink />
    </div>
  )
}