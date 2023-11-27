import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import BasicCard from '../ui/Card/Card';
import './habitaciones.css';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import obtenerHabitacion from '../../functions/obtenerHabitacion';
import { Button } from '@mui/material';
import reservarHabitacion from '../../functions/reservarHabitacion';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledCard = styled.div`
  min-width: 60%;
  background-color: rgb(223, 240, 255);
  align-items: center;
`;

function Habitacion() {
    const [habitacion, sethabitacion] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [diasAplicados, setDiasAplicados] = useState(0);
    const { habitacionId } = useParams();
    const navigate = useNavigate();
    const id = useSelector((state) => state.id.value);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await obtenerHabitacion(habitacionId);
                sethabitacion(data);
            } catch (error) {
                console.error('Error fetching habitaciones:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [habitacionId]); // Agrega habitacionId a la dependencia para que se ejecute cuando cambie

    async function aplicar() {
        try {
            if (selectedDate) {
                const fechaActual = new Date();
                const diasCalculados = Math.ceil((selectedDate - fechaActual) / (1000 * 60 * 60 * 24));
                setDiasAplicados(diasCalculados);
                const aplicado = await reservarHabitacion(diasCalculados, id, habitacionId);
                if (aplicado) {
                    navigate('/Habitaciones');
                }
                navigate('/Habitaciones');
            } else {
                console.warn('Selecciona una fecha antes de reservar.');
            }
        } catch (error) {
            console.error('No se pudo aplicar:', error);
        }
    }

    return (
        <div className="container-fluid v">
            <b>
                <h3 className="titFil">Habitacion</h3>
            </b>
            {isLoading && <LinearProgress />}
            {!isLoading && (
                <div className="container-fluid v">
                    <StyledCard>
                        <BasicCard habitacion={habitacion} />
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Seleccione la fecha"
                        />
                        <Button variant="contained" size="large" className="btn-v" onClick={aplicar}>Reservar</Button>
                    </StyledCard>
                </div>
            )}
        </div>
    );
}
export default Habitacion;
