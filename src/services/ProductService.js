import http from './HttpService';

class ProductService {

  getData = async () => {
    try {
      const response = await http.get('/api/v1/products');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching product data');
    }
  }

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

}

const productService = new ProductService();
export default productService;