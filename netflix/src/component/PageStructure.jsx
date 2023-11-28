import React from 'react'

function PageStructure(props) {      
  return (
    <div>
       <div className='mainpart'>
        <img src={props.img} alt="none"  />
        <h4>{props.mytitle}</h4>
        <p> {props.dis} </p>
        </div> 
    </div>
  )
}

export default PageStructure