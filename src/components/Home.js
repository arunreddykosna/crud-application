import React ,{useState,useEffect }from 'react'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TableData from './TableData';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
export default function Home() {
    const [list,setList] = useState([]);
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [surName,setSurname] = useState('')
    const [desease,setDesease] = useState('');
    const [selectedRow,setSelectedRow] = useState(0)
    const [shouldUpdate,setShouldUpdate] = useState(false)
    const [updatekey,setUpdateKey] = useState(1)
  
     function addPatient(){
      if(!name || !age || !desease || !surName){
        alert("Please fill the details properly")
        return;
      }else{
        if(shouldUpdate){
          let tempArr = [...list];
          tempArr[selectedRow].name = name;
          tempArr[selectedRow].age = age;
          tempArr[selectedRow].desease = desease;
          tempArr[selectedRow].surName = surName;
    
          setList(tempArr);
        }else{
          let newPatient = {};
          newPatient.name = name;
          newPatient.age = age;
          newPatient.surName = surName;
          newPatient.desease = desease;
          setList(prev => [...prev,newPatient]);
        }
      }
     
      emptyData();
    }
  
    function emptyData(){
      setAge('');
      setDesease('');
      setName('');
      setSurname('');
    }
  
    function getSelected(row,rowId){
      setAge(row.age);
      setName(row.name);
      setDesease(row.desease);
      setSurname(row.surName);
      setSelectedRow(rowId)
      setShouldUpdate(true)
      console.log(selectedRow,'sell')
    }
    function deleteRow(i){
      let currentList = list;
      currentList.splice(i,1);
      setList(currentList);
      setUpdateKey(updatekey+1)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Card className='card-grid box-shadow'>
    <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Card className='card-grid box-shadow'>
          <CardContent>
            <TextField value={name} id="outlined-basic" fullWidth label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} /> 
            <TextField  value={age} id="outlined-basic" fullWidth label="Age" variant="outlined" onChange={(e) => setAge(e.target.value)} />
            <TextField value={surName}  id="outlined-basic" fullWidth label="Surname" variant="outlined" onChange={(e) => setSurname(e.target.value)}/>
            <TextField value={desease} id="outlined-basic" fullWidth label="Desease" variant="outlined" onChange={(e) => setDesease(e.target.value)}/>
          </CardContent>

          <CardActions style={{justifyContent:'center'}}>
              <Button variant="contained" onClick={addPatient}>Add/Update</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className='card-grid box-shadow'>
          <CardContent>
            <TableData data={list} key={updatekey} getSelected={getSelected} deleteRow={deleteRow} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    </Card>
  </Box> 

  )
}
