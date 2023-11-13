import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const StyledCard = styled.div`
  min-width: 60%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: aliceblue;
`;

const CardImage = styled.img`
  max-width: 50%;
  height: auto;
  margin-bottom: 12px;
  border-radius: 4px;
`;

const CardTitle = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

const CompanyName = styled(Typography)`
  color: #666;
  margin-bottom: 8px;
`;

const Description = styled(Typography)`
  font-size: 16px;
`;

export default function BasicCard(props) {
    const { habitacion } = props;

    return (
        <StyledCard>
            {habitacion.imagen && (
                <CardImage src={habitacion.imagen} alt="Habitación" />
            )}

            <CardTitle variant="h5" component="div">
                {habitacion.nombre}
            </CardTitle>

            <CompanyName color="textSecondary">
                {habitacion.numero}
            </CompanyName>

            <CompanyName color="textSecondary">
                {habitacion.tipo.tipo}
            </CompanyName>

            <Description>{habitacion.tipo.descripcion}</Description>
        </StyledCard>
    );
}
