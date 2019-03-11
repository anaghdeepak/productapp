import React from 'react';

 const Form = props => (
  
      <div>
        <form onSubmit={props.getProduct} style={{marginBottom:"2rem"}}>
            <input className="form__input" type="text" name="productName" />
           <button className="form__button">Search</button>
        </form>
      </div>
    );
 
export default Form;
