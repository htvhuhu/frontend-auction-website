import Carousel from 'react-bootstrap/Carousel';

function ProductImages({ images }) {
  return (
    <Carousel data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="image"
            src={image}
            alt={`Image${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductImages;