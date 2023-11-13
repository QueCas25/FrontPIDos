import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import {loginSchema} from "../../functions/Validation/validationSchema";
import CustomInput from "../../functions/Validation/customInput";
import './styles.css';
import Logear from "../../functions/Logear";
import {useDispatch} from "react-redux";
import {set} from "../../features/user/userSlice";
import {settoken} from "../../features/user/tokenSlice";
import {decodeToken} from "react-jwt";
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const onSubmit = async (values, actions) => {
        try {
            const usuario = await Logear(
                values.email,
                values.password,
            );
            if (usuario) {
                dispatch(settoken(usuario.token))
                let user = decodeToken(usuario.token)
                dispatch(set(user.sub))
                navigate(`/`);
            }
            actions.resetForm();
        } catch (error) {
            actions.resetForm();
            console.error('Error al logearse', error);
        }
    };

    return (
        <MDBContainer className="my-5">
            <MDBCard className="bg-cv">
                <MDBCardBody className="d-flex flex-column">
                    <h3 className="fw-bold my-4 pb-3" style={{ letterSpacing: '1px' }}>
                        Iniciar Sesion
                    </h3>
                    <Formik
                        initialValues={{ name:"", email:"", password:""}}
                        validationSchema={loginSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                    <div className="form-row">
                                        <CustomInput
                                            className='input-field'
                                            label="Correo"
                                            name="email"
                                            type="input"
                                            placeholder="E-mail"
                                        />
                                        <div/>
                                        <div className="form-row">
                                            <CustomInput
                                                className='input-field'
                                                label="Contraseña"
                                                name="password"
                                                type="input"
                                                placeholder="*****"
                                            />
                                            <div/>
                                                <div className='text-center'>
                                                    <MDBBtn className="mb-4 px-5" disabled={isSubmitting} type="submit"><b>Iniciar Sesion</b></MDBBtn>
                                                </div>
                                            </div>
                                    <div className='textoCuenta'>
                                        <a href='/Registro'>¿No estas registrado? Da click aquí para registrarte.</a>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer >
    );
}

export default Login;