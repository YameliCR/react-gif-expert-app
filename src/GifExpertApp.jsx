import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['cats', 'dogs'])
  // no se pone condicionalmente los hooks: if() {}

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory )) return;

    setCategories( [ newCategory, ...categories] );
  }

  return (
    <>  
        <h1>GifExpertApp</h1>

        {/* input mandando del padre al hijo la función*/}
        {/* <AddCategory 
          setCategories={setCategories}
        /> */}
        {/* <button type='submit' onClick={onAddCategory}>Agregar</button> */}
        
        {/* input del hijo devolviendo al padre el nuevo valor */}
        <AddCategory 
          onNewCategory = {onAddCategory}
        />

        {
          categories.map(category => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }
          {/* card */}
    </>
  )
}

// MAP: barre los elementos de un arreglo y regresa algo nuevo

export default GifExpertApp
