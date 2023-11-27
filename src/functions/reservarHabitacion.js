import axios from "axios";
const baseURL =`https://flask-api-production-315e.up.railway.app/api/crearReservacion`;

async function reservarHabitacion( dias, usuario,habitacion) {
    const data = {
        "dias":dias,
        "habitacion":habitacion,
        "usuario":usuario,
    };
    try {
        const response = await axios.post(baseURL, data, {
        });
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export default reservarHabitacion;