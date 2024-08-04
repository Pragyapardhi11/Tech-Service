import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../src/images/Work from home.mp4';
import Common from './Common';

const About = () =>{
    return (
        <>
         <Common 
            name='Welcome to about page'
            imgsrc={web}
            visit = '/contact'
            btnname='Contact Now'

         />
        </>
    );
}

export default About;