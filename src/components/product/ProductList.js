import '../../css/components/product/ProductList.css';
import productService from '../../services/ProductService';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductSearch from './ProductSearch';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await productService.getData();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
    

    // setProducts(productService.getProducts());
  }, [products]);

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