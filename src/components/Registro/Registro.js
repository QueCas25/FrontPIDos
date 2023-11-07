import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Registro from '../../functions/Registro';
import {registroSchema} from "../../functions/Validation/validationSchema";
import CustomInput from "../../functions/Validation/customInput";
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
                       Registro de Usuario
                    </h3>
                    <Formik
                        initialValues={{ name:"", email:"", password:"",confirmPassword:""}}
                        validationSchema={registroSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <CustomInput
                                        label="Nombre"
                                        name="name"
                                        type="input"
                                        placeholder="Juan Perez"
                                    />
                                    <CustomInput
                                        label="Correo"
                                        name="email"
                                        type="input"
                                        placeholder="E-mail"
                                    />
                                    <CustomInput
                                        label="Contraseña"
                                        name="password"
                                        type="input"
                                        placeholder="*****"
                                    />
                                    <CustomInput
                                        label="Confirme Contraseña"
                                        name="confirmPassword"
                                        type="input"
                                        placeholder="*****"
                                    />
                                <div className='text-center'>
                                    <MDBBtn className="mb-4 px-5" color="dark" size="lg" disabled={isSubmitting} type="submit">Registrar</MDBBtn>
                                </div>
                                        </div>
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
