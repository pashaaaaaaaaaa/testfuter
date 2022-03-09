import React, { useState } from "react"

export default function Select(props){
    const [data, SetData] = useState(props.data)
    console.log(data)
    //  let Render = 
    //      data.map(d => {
    //       return <option key={d.name} value={d.value}>{d}</option>
    //     })

        
    
    return(
            <select className="select">
               {data.map(d => (
                     <option key={d.name} value={d.value}>
                              {d}
                     </option>
               ))}
            </select>
    )
}