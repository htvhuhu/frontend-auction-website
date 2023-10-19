import '../../css/components/product/ProductList.css';
import productService from '../../services/ProductService';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductSearch from './ProductSearch';
import DisplayMessage from '../layout/DisplayMessage';

function ProductList() {
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProducts() {
      const res = await productService.searchProduct();
      if (res) {
        if (res.success) {
          setProducts(res.data);
        } else {
          setError(res.message);
        }        
      } else {
        setError('There is something wrong. Please try again.');
      }      
    }
    fetchProducts();
    
  }, []);

  return (
    <>
      <ProductSearch />
      <div>
        {error && <DisplayMessage message={error} type="error" />}
      </div>
      <div className="product-list">
        {products.map(prod => (
          <ProductItem prod={prod} key={prod.id} />
        ))}
      </div>
    </>
  )
}

export default ProductList;