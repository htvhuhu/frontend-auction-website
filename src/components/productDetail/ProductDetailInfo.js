import Stack from 'react-bootstrap/Stack';
import ProductImages from './ProductImages';
import ProductDescription from './ProductDescription';

function ProductDetailInfo({ product }) {
  
  return (
    <>
      <Stack gap={3} className='product-detail-info'>
        <div className="p-2 prod-title">{product.name}</div>
        <div className="p-2"><ProductImages images={product.images} /></div>
        <div className='p-2'><ProductDescription /></div>
      </Stack>
    </>
  )
}

export default ProductDetailInfo;