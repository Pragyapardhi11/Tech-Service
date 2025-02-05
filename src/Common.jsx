import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../src/images/Girl working on Laptop.mp4';

const Common = (props) =>{
    return (
        <>
         <section>
            <div id="header" className='d-flex align-items-center'>
            <div className='container-fluid'>
            <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1>{props.name} <strong className='brand-name'>Pardhi Technical</strong></h1>
            <h2 className='my-3'>We are the team of talented developer making websites </h2>
            <div className='mt-3'>
            <NavLink to={props.visit} className='btn-get-started'>{props.btnname}</NavLink>
            </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                {/* <img src={web} className='img-fluid-animated' alt="home-img"/> */}
                <video src={props.imgsrc} className='img-fluid-animated' alt="home-video" autoPlay loop muted />
            </div>
            </div>
            </div> 
            </div>
            </div>
            </div>
        </section>

        </>
    );
}

export default Common;