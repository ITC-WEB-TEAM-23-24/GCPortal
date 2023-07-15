import React from 'react'
import hostel6 from "./hostel6.jpg";
import styled from "styled-components"
import './Card2.css'

class Card2 extends React.Component {
  
    
   

    render(){
        let{id,name,description}=this.props
  return (
    <>
   
     <div className="containercd">
       <div className="wrappercd">
        <div className="banner-imagecd">
          <figure>
            <img className="imagecd" src={hostel6} alt='image'></img>
          </figure>
        </div>
        <h1 className='h1'>{description}</h1>
        <p className='p'>{name}</p>
       </div>
     </div>
   


     </>
   
       
  
  )
}
}

export default Card2;


