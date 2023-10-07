import '../../css/components/product/ProductList.css';
import ProductService from '../../services/ProductService';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductSearch from './ProductSearch';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductService.getProducts());
  }, []);

  return (
    <>
      <ProductSearch />
      <div className="product-list">
        {products.map(prod => (
          <ProductItem prod={prod} key={prod.id} />
        ))}
      </div>
    </>
  )
}

export default ProductList;