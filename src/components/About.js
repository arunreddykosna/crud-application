import React from 'react'
import { useEffect,useState } from 'react';
import { Card, CardContent } from '@mui/material';
export default function About(props) {
    const [data,setData] = useState({})
   
    useEffect(() => {
        let pdata  = JSON.parse(localStorage.getItem('rowData'))
        setData(pdata)
        // console.log(data.name,'data')
    },[])
  return (
    <div style={{textAlign: 'center'}}>
       <Card>
          <CardContent>
          <h3>Patient Data</h3>
            <p>Name: { data.name }</p>
            <p>Age : { data.age }</p>
            <p>Surname :  { data.surName }</p>
            <p>Desease : { data.desease }</p>
          </CardContent>
       </Card>
    </div>
  )
}
