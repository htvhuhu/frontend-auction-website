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
      <Tab eventKey="description" title="Overview">
        {description}
      </Tab>
      <Tab eventKey="sale-condition" title="Conditions of Sale">
        {conditionOfSale}
      </Tab>
      <Tab eventKey="shipping" title="Shipping & Redemption">
        {shippingInfo}
      </Tab>
    </Tabs>
  )
}

export default ProductDescription;