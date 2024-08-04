import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../src/images/Girl working on Laptop.mp4';
import Common from './Common';

const Home = () =>{
    return (
        <>
        <Common
            name='Grow your business with'
            imgsrc={web}
            visit='/service'
            btnname='Get Started'
        />
       </>
    );
}

export default Home;