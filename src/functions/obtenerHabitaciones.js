import axios from "axios";

async function obtenerHabitaciones() {
    const baseURL =`https://flask-api-production-315e.up.railway.app/api/Habitaciones`;
    try {
        const response = await axios.get(baseURL, {
        });
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export default obtenerHabitaciones;