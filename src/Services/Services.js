import React from 'react';
import {useState,useEffect} from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';
const Services = () => {

    // services data state
   const [services, setServices] = useState([]);
   //data load
   useEffect(() => {
       fetch('./productServices.json')
       .then(res => res.json())
       .then(data => setServices(data))

       },[])
    return (
        <div>
             <div className="row row-cols-1 row-cols-lg-3 g-5 my-5 mx-4">
               {
                   services.map(service =><ServiceContent
                    key = {service.key}
                    service = {service}></ServiceContent>)
               }
               
            </div>
        </div>
    );
};

export default Services;