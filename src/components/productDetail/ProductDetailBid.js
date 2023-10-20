import Stack from 'react-bootstrap/Stack';
import '../../css/components/product/ProductDetail.css';
import ProductDetailBidInfo from './ProductDetailBidInfo';
import ProductDetailCurrentBid from './ProductDetailCurrentBid';

function ProductDetailBid({ product }) {
  console.log('ProductDetailBid', product);

  return (
    <div className='product-bid'>
      <Stack gap={3}>
        <div className="p-2">
          <ProductDetailBidInfo
            bidDueDate={product.bidDueDate}
            bidStartPrice={product.bidStartPrice}
            deposit={product.deposit}
          />
        </div>
        <div className="p-2">
          <ProductDetailCurrentBid 
            currentBid={product.currentBid} 
            totalBids={product.totalBids}
            productId={product.id}
            bidStartPrice={product.bidStartPrice}
          />
        </div>
      </Stack>
    </div>
  )
}

export default ProductDetailBid;