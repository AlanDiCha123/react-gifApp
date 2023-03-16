import { useState } from 'react';
import { 
  AddCategory, 
  ClearAll, 
  GifGrid 
} from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  const onAddCategory =  newCategory  => {

    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
  }

  const clearAll = () => {
    setCategories([]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <div className='options'>
        <AddCategory onNewValue={ onAddCategory } />
        <ClearAll clear={ clearAll } />
      </div>
        { 
          categories.map( category => ( 
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          )) 
        }
    </>
  )
}
