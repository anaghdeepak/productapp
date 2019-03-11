import React from 'react';
import {Link} from 'react-router-dom';


const Products = props => (
    <div className="container">
        <div className="row">
        {props.products.map((product) =>{
             return(
                <div className="col-md-4" key={product.productid}>
                <div className="product__box">
                <img className="product__box img" src={product.image} alt={product.productname} />
                <div className="product__text">

                    <h5 className="product__title">
                    {product.productname.length < 15 ? `${product.productname}` :
                `${product.productname.substring(0,20)}...`}</h5>
                    <p className="product__subtitle">Company:
                    <span className=".product__subtitle span"> {product.companyname}</span></p>
                </div>
                <button className="product_buttons">
                <Link to={{
                    pathname :`/product/${product.productid}`,
                    state : {
                             productname : product.productname,
                             productinfo : product.productinfo,
                             imageurl : product.image,
                             productcategory : product.productcategory,
                             productioncapacity : product.productioncapacity,
                             sparecapacity : product.sparecapacity,
                             avaliablestock : product.avaliablestock,
                             deliverydate : product.deliverydate,
                             websiteid : product.websiteid


                    }

            }}>View</Link></button>    
                </div>

                    
                </div>
            );

        })

        }
       
        </div>
    </div>

);
export default Products;