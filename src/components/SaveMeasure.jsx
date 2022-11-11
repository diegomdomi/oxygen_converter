import React from 'react'
import './savemeasure.css'
import ShowSaved from './ShowSaved'

const SaveMeasure = (props) => {
console.log(props);
  return (

    <>
      {(props.measuresSaved.length !== 0 ) && <h6>saved</h6>}
      <div className="content">
        {
          props.measuresSaved?.map((item,index) =>(
              
            <div className="savedmeasure"> 
              <ul>
                <ShowSaved value={item.value}
                           measure={item.measure}
                           input={item.input}
                           change={item.change}
                           key={index}
                /> 
                <button className="Borrar" title="Borrar mensaje"
                  onClick={() =>props.deleteElement(index)}>X</button>
              </ul>
            </div> 
          ))
        }
      </div>
    </>
  )
}

export default SaveMeasure
        


