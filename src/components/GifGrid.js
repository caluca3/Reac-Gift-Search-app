import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    
    const {data:images,loading} = useFetchGifs(category);

   
    // //useEffect se utiliza pra evitar el re renderizamiento de 
    // //un componente muchas veces y que en tal casoque se arreglo
    // //se combierta en un cliclo infinito de datos
    

  return (
    <>
        <h3 >{category}</h3>
        {loading&&<p>loading</p>}
     { <div className='card-grid'>
        <ol>
            {
                images.map(img=>(
                    <GifGridItem
                    key={img.id}
                    {...img}
                    />
                ))
            }
        </ol> 
    </div> 
    }   
    </>
  )
}
