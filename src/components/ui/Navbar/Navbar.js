import './Navbar.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {destroy} from "../../../features/user/userSlice";

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import {destroytoken} from "../../../features/user/tokenSlice";



export default function Navbar(){
    const [showBasic, setShowBasic] = useState(false);
    const [busqueda, setBusqueda] = useState('');
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
    }, [navigate]);

    function cerrarSesion(){
        dispatch(destroy());
        dispatch(destroytoken());
        navigate('/')
    }

    const handleInputChange = (event) => {
        setBusqueda(event.target.value);
    };

    const handleBuscarClick = () => {
        navigate(`/busqueda/${busqueda}`)
    };

    return (
        <MDBNavbar expand='lg' light bgColor='light' className='sticky-navbar'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>RentApp</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item-text' href='/'>Inicio</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item-text' href='/Habitaciones'>Habitaciones</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            {user ? (
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Perfil
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link><b>{user}</b></MDBDropdownItem>
                                        <MDBDropdownItem link><b>Información Personal</b></MDBDropdownItem>
                                        <MDBDropdownItem link onClick={cerrarSesion}><b>Cerrar Sesión</b></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            ) : (
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Registrate/Inicia Sesion
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link onClick={() => navigate('/Login')}><b>Iniciar Sesión</b></MDBDropdownItem>
                                        <MDBDropdownItem link onClick={() => navigate('/Registro')}><b>Registrar</b></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            )}
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='buscar' className='form-control' placeholder='Buscar Habitacion' aria-label='Buscar'  onChange={handleInputChange}/>
                        <MDBBtn color='primary' onClick={handleBuscarClick}>Buscar</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}