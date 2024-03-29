import React, { useState} from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputValue= (e)=>{
        setinputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();

      if(inputValue.trim().length > 2){
        setcategories(cats => [inputValue,...cats]);
        setinputValue('');
      }
      
    }
      return (
        <form onSubmit={handleSubmit}>

          <input
              type={'text'}
              value={inputValue}
              onChange={handleInputValue}
              />
        </form>
  )
}
AddCategory.propTypes  ={
  setcategories: PropTypes.func.isRequired
}    
export default AddCategory;