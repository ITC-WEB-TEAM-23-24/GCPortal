import React from 'react'
import hostel6 from "./hostel6.jpg";

// import styled from "styled-components"
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
        <div className="box">
        <h1 className='h1cd'>{name}</h1>
        <p className='pcd'>{description}</p>
        </div>
       </div>
     </div>
     </>
   
       
  
  )
}
}

export default Card2;


