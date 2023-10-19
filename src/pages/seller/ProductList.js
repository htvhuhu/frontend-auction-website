import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productService from "../../services/ProductService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/components/product/Seller.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getProductsBySeller();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await productService.deleteProduct(productId);
      setProducts(products.filter((product) => product.id !== productId));
      alert("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting the product!", error);
    }
  };

  return (
    <div className="container mt-3">
      <h2>My Products</h2>
      <Link to="add" >CreateProduct</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Categories</th>
            <th>Starting Price</th>
            <th>Deposit</th>
            <th>Bid Due Date</th>
            <th>Payment Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.categories}</td>
              <td>${product.startingPrice.toFixed(2)}</td>
              <td>${product.deposit.toFixed(2)}</td>
              <td>{new Date(product.bidDueDate).toLocaleDateString()}</td>
              <td>{new Date(product.paymentDueDate).toLocaleDateString()}</td>
              <td>{product.released ? "Released" : "Not Released"}</td>
              <td>
                {!product.released && (
                  <Link
                    to={`/edit-product/${product.id}`}
                    className="btn btn-warning btn-sm mr-2"
                  >
                    Edit
                  </Link>
                )}
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
