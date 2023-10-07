import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ProductDescription({ product }) {
  return (
    <Tabs
      defaultActiveKey="overview"
      id="fill-tab"
      className="mb-3"
      fill
      variant='tabs'
    >
      <Tab eventKey="overview" title="Overview">
        Tab content for Home
      </Tab>
      <Tab eventKey="sale-condition" title="Conditions of Sale">
        Tab content for Profile
      </Tab>
      <Tab eventKey="shipping" title="Shipping & Redemption">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
  )
}

export default ProductDescription;