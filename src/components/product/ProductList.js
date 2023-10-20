import '../../css/components/product/ProductList.css';
import productService from '../../services/ProductService';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductSearch from './ProductSearch';
import DisplayMessage from '../layout/DisplayMessage';
import Pagination from 'react-bootstrap/Pagination';

function ProductList() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  async function fetchProducts(name, pageNumber) {
    setIsLoading(true);

    const res = await productService.searchProduct(name, pageNumber);
    if (res) {
      if (res.success) {
        setProducts(res.data);
        setTotalPages(res.totalPages);
      } else {
        setError(res.message);
      }        
    } else {
      setError('There is something wrong. Please try again.');
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts(searchKeyword, pageNumber);    
  }, [pageNumber, searchKeyword]);

  if (isLoading) {
    return (
      <section><p>Loading...</p></section>
    );
  }

  function createPagination() {
    let items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item key={page} active={page === pageNumber} onClick={() => paging(page)}>
          {page}
        </Pagination.Item>
      );
    }
    return items;
  }

  function paging(pageNo) {
    setPageNumber(pageNo);
    fetchProducts(searchKeyword, pageNo);
  }

  return (
    <>
      <div className='error_container'>
        {error && <DisplayMessage message={error} type="error" />}
      </div>
      <ProductSearch onSearch={setSearchKeyword} />
      <div className="product-list">
        {products.map(prod => (
          <ProductItem prod={prod} key={prod.id} />
        ))}
      </div>
      <div>
        <Pagination className='pagination'>{createPagination()}</Pagination>
      </div>      
    </>
  )
}

export default ProductList;