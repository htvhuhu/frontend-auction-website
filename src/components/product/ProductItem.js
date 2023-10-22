import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import productService from '../../services/ProductService';
import { formatDate } from '../../util/dateTimeUtil';

function ProductItem({ prod }) {
  const navigate = useNavigate();

  console.log('product===', prod);
  
  function goToProductDetail() {
    navigate("/product/detail", {state: prod.id});
  }

  return (
    <>
      <a href='/product/detail' onClick={goToProductDetail}>
        <Card className='product-item bg-body-tertiary'>
          <Card.Img variant="top" className='image'
            src={prod.images.length > 0 
                      ? productService.getProductImage(prod.images[0].name) 
                      : '/no-image.png'} />
          <Card.Body>
            <Card.Title className='prod-title'>{prod.name}</Card.Title>
            <div className='bid-info'>
              <div className='py-2'>
                <b>#ID:</b>
                <label className='ms-2'>{prod.id}</label>
              </div>
              <div>
                <b>Bid Due Date:</b>
                <label className='ms-2'>{formatDate(prod.bidDueDate)}</label>
              </div>              
              <div className='py-2'>
                <b>Starting Price:</b>
                <label className='price ms-2'>{prod.bidStartPrice}</label>
              </div>
              <div>
                <b>Deposit:</b>
                <label className='price ms-2'>{prod.deposit}</label>
              </div>
            </div>
          </Card.Body>
        </Card>
      </a>
    </>
  )
}

export default ProductItem;