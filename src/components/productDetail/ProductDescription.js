import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ProductDescription({ description, conditionOfSale, shippingInfo }) {
  return (
    <Tabs
      defaultActiveKey="description"
      id="fill-tab"
      className="mb-3"
      fill
      variant='tabs'
    >
      <Tab eventKey="description" title="Overview" className='text-start'>
        {description}
      </Tab>
      <Tab eventKey="sale-condition" title="Conditions of Sale" className='text-start'>
        {conditionOfSale}
      </Tab>
      <Tab eventKey="shipping" title="Shipping & Redemption" className='text-start'>
        {shippingInfo}
      </Tab>
    </Tabs>
  )
}

export default ProductDescription;