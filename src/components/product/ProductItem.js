import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import productService from '../../services/ProductService';
import { formatDate, isClosingSoon } from '../../util/dateTimeUtil';

function ProductItem({ prod }) {
  const navigate = useNavigate();

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
                {isClosingSoon(prod.bidDueDate) &&
                <span className='text-danger ms-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <label className='ms-2'>Closing Soon!</label>
                </span>
                }
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