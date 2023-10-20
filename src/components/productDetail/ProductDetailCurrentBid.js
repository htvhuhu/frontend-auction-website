import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductDetailCurrentBid({ currentBid, totalBids }) {
  return (
    <div className='box'>
      <div className='left py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
          <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </div>
      <div className='right'>
        <div>
          <b>CURRENT BID:</b>
          <label className='current-bid ms-2'>{currentBid}</label>
        </div>
        <div className='py-2'>
          <b>Total Bids:</b>
          <label className='ms-2'>{totalBids}</label>
        </div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
          <Form.Control
            placeholder="Bid price"
            aria-label="bidPrice"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="primary" size="lg" className='btn-large'>
          BID
        </Button>
      </div>
    </div>
  )
}

export default ProductDetailCurrentBid;