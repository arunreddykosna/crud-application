import React ,{useState,useEffect }from 'react'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './App.css'
import { useNavigate } from 'react-router-dom';
export default function App() {
  const history = useNavigate();

  const [email,setEmail] = useState("")
  const [pw,setPw] = useState("")

  function login(){
    if(email && pw){
      history('/home');
    }else{
      alert('Invalid Credentials')
    }
    
  }
  return (
    <div style={{ textAlign: 'center' }}>
     
    <Box sx={{ flexGrow: 1 }}>
    <Card className='card-grid box-shadow' style={{padding: '3rem'}}>
    
    <Grid container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6} style={{ textAlign: 'center' }}>
        <Card className='card-grid box-shadow'>
          <CardContent>
          <h2>Login Into Portal</h2>
            <TextField value={email} id="outlined-basic" fullWidth label="Email" variant="outlined" onChange={e => setEmail(e.target.value)} /> 
            <TextField value={pw} id="outlined-basic" type={"password"} fullWidth label="Password" variant="outlined" onChange={e => setPw(e.target.value)}  />
          </CardContent>

          <CardActions style={{justifyContent:'center'}}>
              <Button variant="contained" onClick={login}>Login</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
    </Card>
  </Box>
    </div>

  )
}
