import Carousel from 'react-bootstrap/Carousel';
import productService from '../../services/ProductService';


function ProductImages({ images }) {
  return (
    <Carousel data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="image"
            src={productService.getProductImage(image.name)}
            alt={image.name}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductImages;