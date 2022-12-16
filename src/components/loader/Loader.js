import { Grid } from '@mui/material'
import React from 'react'
import { PulseLoader } from 'react-spinners'

const Loader = () => {
  return (
    <Grid container maxWidth={"lg"} height="100%" sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <PulseLoader/>
    </Grid>
  )
}

export default Loader