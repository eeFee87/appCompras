import './Products.css';
import product from '../../data/products.json';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import loadProductsService from '../../services/services';
const Products = () => {
  console.log(product[0].images[0]);
  /* useEffect(() => {
    loadProductsService();
  }, []); */
  return (
    <main className="container products d-flex justify-content-center align-items-start">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://cdn.shopify.com/s/files/1/0050/4483/0275/products/lente_de_sol_so_long_panther_negro_diagonal_1200x.jpg?v=1651685753"
        />
        <Card.Body>
          <Card.Title>{product[0].title}</Card.Title>
          <Card.Text>{product[0].description}</Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </main>
  );
};
export default Products;
