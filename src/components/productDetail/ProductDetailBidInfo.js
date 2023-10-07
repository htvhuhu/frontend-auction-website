
function ProductDetailBidInfo({ product }) {
  return (
    <div className='box'>
      <div className='left py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
        </svg>
      </div>
      <div className='right'>
        <div className='py-2'>
          <b>BID DUE DATE:</b>
          <label className='bid-due-date ms-2'>10-22-2023 10:30</label>
        </div>
        <div className='py-2'>
          <b>Start Price:</b>
          <label className='price ms-2'>{product.bidStartPrice}</label></div>
        <div className='py-2'>
          <b>Deposit:</b>
          <label className='price ms-2'>{product.deposit}</label></div>
      </div>
    </div>
  )
}

export default ProductDetailBidInfo;