import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const StyledCard = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid #8a2be2; 
  border-radius: 12px;
  padding: 24px;
  background-color: lavender; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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


export default function ReservacionCard(props) {
    const { reservacion } = props;

    return (
        <StyledCard>

            <CardTitle className='titulin' variant="h5" component="div">
                Habitacion: {reservacion.habitacion}
            </CardTitle>

            <CompanyName className='textinsecundarin2' color="textSecondary">
                Fecha Inicial: {reservacion.fecha_inicial}
            </CompanyName>

            <CompanyName className='textinsecundarin2' color="textSecondary">
                Dias Reservados: {reservacion.dias}
            </CompanyName>

            <CompanyName className='textinsecundarin2' color="textSecondary">
               Reservado por : {reservacion.usuario}
            </CompanyName>

            <CompanyName className='textinsecundarin2' color="textSecondary">
                Total : ${parseInt(reservacion.costo.replace('$', ''), 10) * reservacion.dias}
            </CompanyName>
        </StyledCard>
    );
}