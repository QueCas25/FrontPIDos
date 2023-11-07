import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import "./Footer.css"

export default function Footer() {
    return (
        <MDBFooter className='text-center  fixed-bottom blue yellow-text h5 mb-0' >
            <div className=''>&copy; RentApp - 2023</div>
        </MDBFooter>
    );
}