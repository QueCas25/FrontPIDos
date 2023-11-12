import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Registro from '../../functions/Registro';
import {registroSchema} from "../../functions/Validation/validationSchema";
import CustomInput from "../../functions/Validation/customInput";
import './styles.css';
function Registrar() {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        try {
            const usuario = await Registro(
                values.name,
                values.email,
                values.password,
            );
            if (usuario) {
                navigate(`/Inicio`);
            }
            actions.resetForm();
        } catch (error) {
            actions.resetForm();
            console.error('Error during form submission:', error);
        }
    };

    return (
        <MDBContainer className="my-5">
            <MDBCard className="bg-cv">
                <MDBCardBody className="d-flex flex-column">
                    <h3 className="fw-bold my-4 pb-3" style={{ letterSpacing: '1px' }}>
                       Crea una cuenta
                    </h3>
                    <Formik
                        initialValues={{ name:"", email:"", password:"",confirmPassword:""}}
                        validationSchema={registroSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                    <div className="form-row">            
                                    <CustomInput
                                        className='input-field'
                                        label="Nombre"
                                        name="name"
                                        type="input"
                                        placeholder="Juan Perez"
                                    />
                                    <div/>
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
                                    <div className="form-row">  
                                    <CustomInput
                                        className='input-field'
                                        label="Confirme Contraseña"
                                        name="confirmPassword"
                                        type="input"
                                        placeholder="*****"
                                    />
                                    <div/>
                                <div className='text-center'>
                                    <MDBBtn className="mb-4 px-5" disabled={isSubmitting} type="submit"><b>Registrar</b></MDBBtn>
                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='textoCuenta'>
                                <a href='Login'>¿Ya tienes una cuenta? Da click aquí para iniciar sesión.</a>
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

export default Registrar;
