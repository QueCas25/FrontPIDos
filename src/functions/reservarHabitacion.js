import axios from "axios";
const baseURL =`https://flask-api-production-315e.up.railway.app/api/crearReservacion`;

async function reservarHabitacion( correo, password,jwt) {
    const data = {
        "email":correo,
        "password":password,
    };
    try {
        const response = await axios.post(baseURL, data, {
            headers: { Authorization: `Bearer: ${jwt}` }
        });
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export default reservarHabitacion;