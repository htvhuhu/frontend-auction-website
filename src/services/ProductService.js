import api from './HttpService';

class ProductService {

  getProducts() {
    let products = [];
    products.push({
      id: 1,
      name: 'iPhone 15 Pro Max',
      bidStartPrice: 800,
      deposit: 50,
      bidDueDate: '10/22/2023',
      images: ['/logo192.png']
    });
    products.push({
      id: 2,
      name: 'iPhone 15 Pro',
      bidStartPrice: 600,
      deposit: 50,
      bidDueDate: '10/20/2023',
      images: ['/logo192.png']
    });
    products.push({
      id: 3,
      name: 'Apple iPhone 14 Pro Max 128GB',
      bidStartPrice: 600,
      deposit: 50,
      bidDueDate: '10/20/2023',
      images: ['/logo192.png']
    });
    products.push({
      id: 4,
      name: 'Apple iPhone 14 Pro Max 128GB',
      bidStartPrice: 600,
      deposit: 50,
      bidDueDate: '10/20/2023',
      images: ['/logo192.png']
    });
    products.push({
      id: 5,
      name: 'Apple iPhone 14 Pro Max 128GB',
      bidStartPrice: 600,
      deposit: 50,
      bidDueDate: '10/20/2023',
      images: ['/logo192.png']
    });
    products.push({
      id: 6,
      name: 'Apple iPhone 14 Pro Max 128GB Apple iPhone 14 Pro Max 128GB',
      bidStartPrice: 600,
      deposit: 50,
      bidDueDate: '10/20/2023',
      images: ['/logo192.png']
    });
    return products;
  }

  getProductDetails(productId) {
    return {
      id: 6,
      name: 'Apple iPhone 14 Pro Max 128GB Apple iPhone 14 Pro Max 128GB',
      bidStartPrice: 600,
      deposit: 50,
      bidDueDate: '10/20/2023',
      images: ['/original (2).jpeg', '/original (1).jpeg', '/original.jpeg']
    };
  }
  api_prefix = "/api/v1"
  getProductsBySeller = () => api.get(this.api_prefix + '/seller/products');
  addProduct = (product) => api.post(this.api_prefix + '/seller/products', product);
  updateProduct = (id, product) => api.put(this.api_prefix + `/seller/products/${id}`, product);
  deleteProduct = (id) => api.delete(this.api_prefix + `/seller/products/${id}`);
  

}

const productService = new ProductService();
export default productService;