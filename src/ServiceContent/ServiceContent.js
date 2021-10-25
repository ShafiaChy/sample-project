import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceContent = (props) => {
    const {key,image, name, price, description} = props.service;
    const history = useHistory();
    const handleDetails = () => {
        
        history.push('/details');
    }
    return (
        
        <div>
            <div className="col ">
            <div className="card bg-image">
         
                <img src={image} className="card-img-top w-75 serviceImage mx-auto mt-3" alt="..."/>
         
            <div className="card-body">
                <h4 className="card-title text-center">{name}</h4>
                <h5>Price: Tk {price}/-</h5>
                <p className="card-text bg-white">{description}</p>
            </div>
           <div className="mb-3 mx-auto">
            <Link to={`/details/${key}`}>
            <button onClick={handleDetails} className="px-4 py-2 rounded bg-dark text-white">Details</button>
            </Link>
           </div>
           
         </div>
        
       </div> 
        </div>
    );
};

export default ServiceContent;