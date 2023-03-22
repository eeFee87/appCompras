import './Products.css';
import products from '../../data/products.json';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect } from 'react';
import loadProductsService from '../../services/services';

const Products = () => {
  /* useEffect(() => {
    loadProductsService();
  }, []); */
  return (
    <main className="products ">
      <ul className="d-flex flex-wrap justify-content-center">
        {products.map((item) => {
          return (
            <li className="d-flex" key={item.id}>
              <ProductCard product={item} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Products;
