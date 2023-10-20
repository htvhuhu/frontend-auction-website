import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductDetailBid from '../components/productDetail/ProductDetailBid';
import ProductDetailInfo from '../components/productDetail/ProductDetailInfo';
import { useEffect, useState } from 'react';
import productService from '../services/ProductService';
import '../css/components/product/ProductDetail.css';
import { useLocation } from 'react-router-dom';
import DisplayMessage from '../components/layout/DisplayMessage';


function ProductDetail() {
  const [error, setError] = useState();
  const location = useLocation();
  const [product, setProduct] = useState();
  
  useEffect(() => {
    async function getProduct(id) {

      const res = await productService.getProductDetails(id);
      if (res) {
        if (res.success) {
          // console.log('getProductDetails', res);
          setProduct({...res.data, totalBids: res.totalBids, currentBid: res.currentBid});
        } else {
          setError(res.message);
        }
      } else {
        setError('There is something wrong. Please try again.');
      }

    }

    if (location.state) {
      getProduct(location.state);
    }
    
  }, [location.state]);

  return (
    <>
      <div className='text-danger p-4'>
        {error && <DisplayMessage message={error} type="error" />}
      </div>
      <Container>
        <Row>
          <Col sm={8}>{product && <ProductDetailInfo product={product} />}</Col>
          <Col sm={4}>{product && <ProductDetailBid product={product} />}</Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductDetail;