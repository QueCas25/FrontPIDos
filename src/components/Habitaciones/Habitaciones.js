import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import obtenerHabitaciones from '../../functions/obtenerHabitaciones';
import LinearProgress from '@mui/material/LinearProgress';
//import { LinearProgress } from '@mui/material';
import BasicCard from '../ui/Card/Card';
import './habitaciones.css'
import {Button} from "@mui/material";


function Habitaciones() {
 const [habitaciones, sethabitaciones] = useState({});
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  async function fetchData() {
   try {
    const data = await obtenerHabitaciones();
    sethabitaciones(data);
   } catch (error) {
    console.error('Error fetching habitaciones:', error);
   } finally {
    setIsLoading(false);
   }
  }

  fetchData();
 });
 return (
     <div className="container-fluid v">
        <b>
      <h3 className="titFil">Habitaciones</h3>
      </b>
      {isLoading && <LinearProgress />}
      {!isLoading && (
          <div className="container-fluid v">
           <Stack container spacing={3}>
            {habitaciones.map((habitacion) => (
                  <BasicCard habitacion={habitacion}/>
            ))}
           </Stack>
          </div>
      )}
     </div>
 );
}

export default Habitaciones;
