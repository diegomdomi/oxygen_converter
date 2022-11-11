import React from 'react'
import './savemeasure.css'

const ShowSaved = ({value,input,measure,index,change}) => {

   
  return (
  <>
    <li className="showlist" key={index}>
      {input} {measure} → {value} { change }  
    </li>
    
  </>
  )
}

export default ShowSaved