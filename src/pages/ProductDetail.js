import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductDetailBid from '../components/productDetail/ProductDetailBid';
import ProductDetailInfo from '../components/productDetail/ProductDetailInfo';
import { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import '../css/components/product/ProductDetail.css';

function ProductDetail({productId}) {
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(ProductService.getProductDetails(productId));
  }, [productId]);

  return (
    <Container>
      <Row>
        <Col sm={8}>{product && <ProductDetailInfo product={product}/>}</Col>
        <Col sm={4}>{product && <ProductDetailBid product={product}/>}</Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;