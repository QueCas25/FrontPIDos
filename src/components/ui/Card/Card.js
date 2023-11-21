import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import {Button} from "@mui/material";


const StyledCard = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid #8a2be2; 
  border-radius: 12px;
  padding: 24px;
  background-color: lavender; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%; 
  height: auto;
  margin-bottom: 16px;
  border-radius: 8px;
  display: block;
`;

const CardTitle = styled(Typography)`
  font-size: 28px;
  font-weight: bold;
  color: purple; 
  margin-bottom: 8px;
  text-align: center;
`;

const CompanyName = styled(Typography)`
  color: #6a5acd;
  margin-bottom: 12px;
  font-size: 18px;
  text-align: center;
`;

const Description = styled(Typography)`
  font-size: 18px;
  color: #333;
  text-align: center;
`;


export default function BasicCard(props) {
    const [cuentaMessage, setCuentaMessage] = useState();
    const { habitacion } = props;

    useEffect(() => {
        // Add any logic you need when cuentaMessage changes
        setTimeout(() => {
            setCuentaMessage(null);
        }, 3000);
    }, [cuentaMessage]);

    function reservar() {
        const habitacionData = {
            message: "Habitacion Reservada",
            parametro: 1
        };
        setCuentaMessage(habitacionData.message);
    }

    return (
        <StyledCard>
            {habitacion.imagen && (
                <CardImage src={habitacion.imagen} alt="Habitación" />
            )}

            <CardTitle className='titulin' variant="h5" component="div">
                {habitacion.nombre}
            </CardTitle>

            <CompanyName className='textinsecundarin2' color="textSecondary">
                {habitacion.numero}
            </CompanyName>

            <CompanyName className='textinsecundarin2' color="textSecondary">
                {habitacion.tipo.tipo}
            </CompanyName>

            <Description className='textinsecundarin2' >{habitacion.tipo.descripcion}</Description>
            <Button variant="contained" size="large" className='btn-v' onClick={reservar}>Reservar</Button>
        </StyledCard>
    );
}
