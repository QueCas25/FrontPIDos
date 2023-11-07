import React from 'react';
import {MDBCarousel, MDBCarouselItem} from "mdb-react-ui-kit";

function Home(){

    return(
        <div className="container-fluid c">
            <MDBCarousel className='h-100 w-100'>
                <MDBCarouselItem
                    className='w-100  d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/new/slides/041.jpg'
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/new/slides/042.jpg'
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100  d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/new/slides/043.jpg'
                    alt='...'
                />
            </MDBCarousel>
        </div>
    );
}
export default Home;