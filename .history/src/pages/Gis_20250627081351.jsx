import React, { useState } from 'react'
import { Gisprojects } from '../assets/Gisprojects.js'
const Gis = () => {
    const {search ,setSearch} = useState("")
    function taggle(e){
        setSearch(e.target.value)
        console.log(setSearch)
    }
    
  return (
    <section id="gis">
        <h2>KDINIFIIDNI</h2>
        <input onChange={taggle} value={search} placeholder='search an item here'/>
        <div>
              {Gisprojects
              .filter((item)=>item.desc.toLocaleLowerCase().includes(search))
              .map((item,index)=>{
                return <div key={index}>
                    <h1>{item.name}</h1>
                    <p>{item.desc}</p>
                </div>
              })
              }
        </div>
    </section>
  )
}

export default Gis