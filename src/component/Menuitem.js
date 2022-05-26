import React from 'react'
function Menuitem({image, name, price})
{
    return(
        <div  className='menuitem'>
        <div style={{backgroundImage: `url(${image})`}}> 
        </div>

        <h1>{name}</h1>
        <p>Rs.{price}</p>
        </div>
    )
}
export default Menuitem;