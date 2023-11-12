import './Navbar.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
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
        navigate('/Login')
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
                            <MDBNavbarLink className='navbar-item-text' href='/inicio'>Inicio</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item-text' href='/vacantes'>Habitaciones</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle  tag='a' className='nav-link' role='button'>
                                    Perfil
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>{user.userEmail}</MDBDropdownItem>
                                    <MDBDropdownItem link><b>Informacion Personal</b></MDBDropdownItem>
                                    <MDBDropdownItem link>{user.tier >= 0 ? <Link to={'/vacantesCreadas'} target="_self"><b>Panel de Control</b></Link>:<Link to={'/vacantesAplicadas'} target="_self">Resumen Contrato</Link>}</MDBDropdownItem>
                                    <MDBDropdownItem link onClick={cerrarSesion}><b>Cerrar Sesión</b></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
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