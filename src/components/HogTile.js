import React from 'react'

function HogTile({name, specialty, greased, weight, image, medal}){
    return(
        <div className=" parent-container ui card eight wide column" >
          <div className='img-container'>
            <img className='hog-img' 
              src={image} alt={`picture of a pig`} 
              />
          </div>
          <div className='details-container'>
            <h3>{name}</h3>
            <p>{specialty}</p>
            <p>{weight}</p>
            <p>{medal}</p> 
            <p>{greased}</p>
          </div>
          </div>

    )
}

export default HogTile;