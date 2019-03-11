import React, { Component } from 'react';
import {Link} from "react-router-dom";

const API_KEY="51c76f30";

export default class Product extends Component {
    state= {
       
        productname: "",
        imageurl: "",
        productinfo:"",
        productcategory: "",
        productioncapacity:"",
        sparecapacity: "",
        avaliablestock : "",
        deliverydate: "",
        websiteid:"",

    }
    componentWillMount = async() => {
       const products = this.props.location.state
        const title= this.props.location.state.companyname;
        const title2= this.props.location.state.productname;
        
       this.setState({
        
        productname: products.productname,
        imageurl:products.imageurl,
        productinfo:products.productinfo,
        productcategory: products.productcategory,
        productioncapacity:products.productioncapacity,
        sparecapacity: products.sparecapacity,
        avaliablestock : products.avaliablestock,
        deliverydate: products.deliverydate,
        websiteid:products.websiteid
       });
      console.log(this.state);
      
    }
    
  render() {
      console.log(this.props);
    return (
      <div className="container">
        {
            this.state !== 0 &&
            <div className="active-product">
            <img className="active-product__img" src={this.state.imageurl} alt= {this.state.productname} >
            </img>
            <h3 className="active-product__title">{this.state.productname}</h3>
            <h4 className="active-product__publisher">
            Info : <span>{this.state.productinfo}</span></h4>
            <h5 className="active-product__website"> Category: <span>{this.state.productcategory}</span></h5>
             <h5 className="active-product__website">Capacity: <span>{this.state.productioncapacity}</span></h5>
            <h5 className="active-product__website">Spare: <span>{this.state.sparecapacity}</span></h5> 
            <h5 className="active-product__website">Stock: <span>{this.state.avaliablestock}</span></h5>
            <h5 className="active-product__website">Delivery date: <span>{this.state.deliverydate}</span></h5>
            <p className="active-product__website">Website :
            <span>
                <a href={this.state.websiteid}>{this.state.websiteid.length < 35 ? `${this.state.websiteid}` :
                `${this.state.websiteid.substring(0,30)}...`}</a>
            </span> 
            </p>
            <button className="active-product__button">
           <Link to="/">Home</Link>
            </button>
          
        </div>
       
        }


      </div>
    )
  }
}
