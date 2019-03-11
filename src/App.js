import React, { Component } from 'react';

import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Products from './components/Products';

const API_KEY="51c76f30";

class App extends Component {
  state={
    products:[]
  }

  getProduct= async(e) =>  {
 
    e.preventDefault();
    const productName= e.target.elements.productName.value; 
    const api_call=await fetch(`https://my.api.mockaroo.com/product-info/.json?key=${API_KEY}`);
    
   const data= await api_call.json();
  this.setState ({
    products: data
  });
  console.log(this.state.products);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("products");
    const products= JSON.parse(json);
    this.setState({
      products
    });
  }

  componentDidUpdate = ()=> {
    const products = JSON.stringify(this.state.products);
    localStorage.setItem("products", products);
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Product search</h1>
      </header>
     
       
       <Form getProduct= {this.getProduct} />
       <Products  products={this.state.products} /> 
    
     </div> 
    );   
  }
}

export default App;
