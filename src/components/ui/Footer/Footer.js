import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import "./Footer.css"

export default function Footer() {
    return (
        <MDBFooter className='text-center  fixed-bottom blue yellow-text h5 mb-0' >
            <div className=''>Copyright &copy; 2023- RentApp.com™. Todos los derechos reservados.  </div>
        </MDBFooter>
    );
}