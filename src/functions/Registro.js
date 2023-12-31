import axios from "axios";
const baseURL =`https://flask-api-production-315e.up.railway.app/api/registro`;

async function Registro(nombre, correo, password) {
    const data = {
        "nombre":nombre,
       "email":correo,
        "password":password,
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

export default Registro;
