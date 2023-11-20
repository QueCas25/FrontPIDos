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
    const { habitacion } = props;

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
        </StyledCard>
    );
}
