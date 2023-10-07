import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function ProductItem({ prod }) {
  const navigate = useNavigate();

  function goToProductDetail() {
    navigate("/product/detail", {state: prod.id});
  }

  return (
    <>
      <a href='#' onClick={goToProductDetail}>
        <Card className='product-item bg-body-tertiary'>
          <Card.Img variant="top" src={prod.images[0]} />
          <Card.Body>
            <Card.Title className='prod-title'>{prod.name}</Card.Title>
            <div className='bid-info'>
              <div><b>Bids:</b></div>
              <div><b>Watchers:</b></div>
              <div><b>Starting Price:</b></div>
              <div><b>Current Bid:</b></div>
              <div className='cur-bid'><b>100</b></div>
            </div>
          </Card.Body>
        </Card>
      </a>
    </>
  )
}

export default ProductItem;