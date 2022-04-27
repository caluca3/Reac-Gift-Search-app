import React from 'react'

export const GifGridItem = ({title,url}) => {

    // console.log({url});
        
  return (
    <div>
       <img className='card' src={url} alt={title}/>
       <p>{title}</p>
    </div>
  )
}
