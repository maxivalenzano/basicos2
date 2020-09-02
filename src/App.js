import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  // Crear lista de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'ReactJS', precio: 50 },
    { id: 2, nombre: 'VueJS', precio: 40 },
    { id: 3, nombre: 'NodeJS', precio: 30 },
    { id: 4, nombre: 'AngularJS', precio: 20 },
  ]);

  // state para carrito de compra
  const [ carrito, agregarProducto ] = useState([]);

  // Obtener Fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header 
          titulo='Tienda Virtual'
        />

        <h1>Lista de productos</h1>
        {productos.map(producto =>(
          
          <Producto
            key = {producto.id} 
            producto = {producto}
            carrito={carrito}
            productos={productos}
            agregarProducto= {agregarProducto}
          />

        ))}

        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}       
        
        />

        <Footer 
          fecha={fecha}
        />
    </Fragment>
  );
}

export default App;
