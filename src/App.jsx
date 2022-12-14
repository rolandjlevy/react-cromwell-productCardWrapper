import React, { useState } from 'react';
import { product as productData } from './product-data.js';
import ProductCard from './ProductCard';
import './App.css';

// Use component wrappers for Inversion of Control

const ProductCardWrapperSimple = () => (
  <ProductCard product={productData}>
    <section name="heading">
      <h3>ProductCardWrapper &gt; Basic</h3>
    </section>
    <section name="body">
      <p>Less content in this instance of ProductCardWrapper</p>
    </section>
  </ProductCard>)

const ProductCardWrapperComplex = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = (e) => {
    const counterValue = e.target.id === 'add' ? counter + 1 : 0;
    setCounter(counterValue);
  }
  return (
    <ProductCard product={productData}>
      <section name="heading">
        <h3>ProductCardWrapper &gt; Complex</h3>
      </section>
      <section name="subHeading">
        <h5>The sub heading for ProductCardWrapper</h5>
      </section>
      <section name="image">
        <img src="https://via.placeholder.com/100" />
      </section>
      <section name="body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </section>
      <section name="buttonGroup">
        <button id="reset" onClick={handleCounter}>Reset</button>
        <button id="add" onClick={handleCounter} className="m-l-10">Add to counter</button>
        <span className="m-l-10">Counter: {counter}</span>
      </section>
      <section name="footer">
        <p>Footer information</p>
      </section>
    </ProductCard>);
}

export default function App() {
  return (
    <>
      <ProductCardWrapperSimple />
      <ProductCardWrapperComplex />
      <ProductCardWrapperSimple />
    </>
  )
}
