import React, {useState} from 'react'
import HogTile from './HogTile'
import TileInfo from './TileInfo'

function HogsInfo({hogs}){
    
    const [greasedHogs, setGreasedHogs] = useState ('false')
    const [hoverTile, setHoverTile] =  useState ('name')

    function handleSorting (e){
        setHoverTile(e.target.value)
    }

    function handleGreasedHogs(e){
        setGreasedHogs(e.target.checked)
    } 


        const filterGreasedHog = hogs
        .filter(hog => {
            const filtered = greasedHogs ? hog.greased : hogs
            return filtered
        })

    .sort((a,b) => {
        if (hoverTile === 'name'){
            return a.name.localeCompare(b.name)
        }
        if (hoverTile === 'weight'){
            return a.weight - b.weight
        }
        
        })
    

    return (
        <>
        <TileInfo 
          sorting = {handleSorting}
          greased = {greasedHogs}
          handleGreased = {handleGreasedHogs}
        />
        <div className="cards" >
        {filterGreasedHog.map((hog)=>(
        <HogTile
          key={hog.name}
          hog={hog}
          name={hog.name}
          specialty={hog.specialty}
          image={hog.image}
          greased={hog.greased}
          weight={hog.weight}
          medal={hog["highest medal achieved"]}
        />
      ))}
      </div>
      </>
    )    
}

export default HogsInfo;