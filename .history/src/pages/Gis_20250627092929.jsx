import React, { useState } from 'react'
import { Gisprojects } from '../assets/Gisprojects.js'
const Gis = () => {
    const [search ,setSearch] = useState("")
    // function taggle(e){
    //     setSearch(e.target.value)
    //     console.log(setSearch)
    // }
    
  return (
    <div">
        <h2>KDINIFIIDNI</h2>
          <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search by category......"
          />
        <div>
              {Gisprojects
              .filter((item)=> item.name.toLowerCase().includes(search))
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