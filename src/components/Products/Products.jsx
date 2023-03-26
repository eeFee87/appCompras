import './Products.css';

import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';

import loadProductsService from '../../services/services';

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getdata = async () => {
      const data = await loadProductsService();

      setProducts(data);
    };
    getdata();
  }, []);

  return (
    <main className="products ">
      <ul className="d-flex flex-wrap justify-content-center">
        {products?.map((item) => {
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
