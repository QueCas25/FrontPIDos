import axios from "axios";
const baseURL =`http://localhost:8080/registro`;

async function Registro(nombre, correo, password) {
    console.log(baseURL)

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", correo);
    formData.append("password", password);

    try {
        console.log(nombre)
        const response = await axios.post(baseURL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export default Registro;
