import http from './HttpService';
import Constant from '../util/constant';

class ProductService {

  searchProduct = async (name, pageNumber) => {
    try {
      const searchRequest = {name, pageNumber, pageSize: Constant.PRODUCT_PAGE_SIZE};
      const res = await http.post('/products/search', searchRequest);
      return res.data;
    } catch (error) {
      return null;
    }
  }

  getProductDetails = async (id) => {
    try {
      const res = await http.get(`/products/${id}`);
      return res.data;
    } catch (error) {
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