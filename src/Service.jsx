import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const Service = () =>{
    return (
        <>
        <div className='my-5 text-center'>
        <h1>Our Services</h1>
        </div>

        <div className='container-fluid mb-5'>
        <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row gy-5'>
        
          {
            Sdata.map((val,idx) =>{
                return(
                    <>
                        <Card
                        key={idx}
                            imgsrc={val.imgsrc}
                            title={val.title}
                        />
                    </>
                )
            })
          }
        
        </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Service;