import http from './HttpService';

class ProductService {

  searchProduct = async (name, ) => {
    try {
      const res = await http.post('/products/search');
      return res.data;
    } catch (error) {
      console.log('error', error);
      return null;
    }
  }

  getProductsBySeller = () => http.get('/seller/products');
  addProduct = (product) => http.post('/seller/products', product);
  updateProduct = (id, product) => http.put(`/seller/products/${id}`, product);
  deleteProduct = (id) => http.delete(`/seller/products/${id}`);
  

}

const productService = new ProductService();
export default productService;