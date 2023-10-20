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
              <div className='py-2'>
                <b>#ID:</b>
                <label className='ms-2'>{prod.id}</label>
              </div>
              <div>
                <b>Total Bids:</b>
                <label className='ms-2'>{prod.totalBids}</label>
              </div>              
              <div className='py-2'>
                <b>Start Price:</b>
                <label className='price ms-2'>{prod.bidStartPrice}</label>
              </div>
              <div><b>Current Bid:</b></div>
              <div className='cur-bid'><b>{prod.currentBid}</b></div>
            </div>
          </Card.Body>
        </Card>
      </a>
    </>
  )
}

export default ProductItem;