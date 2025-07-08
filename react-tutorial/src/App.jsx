import { useState } from 'react'
import Product from './Product';
import products from "./data.jsx";



function App(props) {
	// Render <Product /> at least twice inside the .products-grid 
	return (<div className="products-grid">
		{props.products.map(product => <Product key={product.id} details={product}/>)}
	</div>);
}

export default App
