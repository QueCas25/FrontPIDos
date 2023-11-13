import axios from "axios";
const baseURL =`https://flask-api-production-315e.up.railway.app/api/login`;

async function Logear( correo, password) {
    const data = {
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

export default Logear;