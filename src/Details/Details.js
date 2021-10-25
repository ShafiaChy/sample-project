import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    
    const { id } =useParams();
    const [details,setDetails] = useState([]);
   

         //data load
        useEffect(() => {
        fetch('/productServices.json')
        .then(res => res.json())
        .then(data => setDetails(data))
 
        },[])
       
       const singleService = details.filter(detail => detail.key == id)
           
       

   
    return (
        
        <div classNmeName="my-5">
            <div classNme="card mb-3">
                <div classNme="row g-0">
                    <div classNme="col-md-4">
                        <img src={singleService[0]?.image} classNme="img-fluid rounded-start" alt="..."/>
                    </div>
                <div classNme="col-md-8">
                    <div classNme="card-body">
                        <h5 classNme="card-title">{singleService[0]?.name}</h5>
                        <h5 classNme="card-title">Tk: {singleService[0]?.price}/-</h5>
                            <p classNme="card-text">{singleService[0]?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
           
     
   
  
    );
};

export default Details;