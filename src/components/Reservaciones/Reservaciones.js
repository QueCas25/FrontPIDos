import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import obtenerReservaciones from "../../functions/obtenerReservaciones";
import {useSelector} from "react-redux";
import ReservacionCard from "../ui/Card/CardReservacion";


function Reservaciones() {
    const [reservaciones, setreservaciones] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const id = useSelector((state) => state.id.value);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await obtenerReservaciones(id);
                setreservaciones(data);
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
                <h3 className="titFil">Reservaciones </h3>
            </b>
            {isLoading && <LinearProgress />}
            {!isLoading && (
                <div className="container-fluid v">
                    <Stack container spacing={3}>
                        {reservaciones.map((reservacion) => (
                                <ReservacionCard reservacion={reservacion}/>
                        ))}
                    </Stack>
                </div>
            )}
        </div>
    );
}

export default Reservaciones;