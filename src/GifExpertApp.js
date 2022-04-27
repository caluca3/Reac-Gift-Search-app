import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//PARA CREAR MAS RAPIDO UN COMPONENTE SE USA EL SNIPPET RAFCP
export const GifExpertApp = () =>{ 
     //Se debe usar un hook
    const [categories, setcategories] = useState(['One piece']);

//   const handleAdd = ()=>{
//       setcategories(['Gladys',...categories]);
//       setcategories(cats => [...cats,'Gladys']);
//   }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => (
                      <GifGrid
                        key={category} 
                        category={category}
                      />
                            ))
                }
            </ol>
        </>
    );
        
};


