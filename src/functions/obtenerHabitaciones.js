import axios from "axios";
const baseURL =`https://flask-api-production-315e.up.railway.app/api/Habitaciones`;

async function obtenerHabitaciones() {
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