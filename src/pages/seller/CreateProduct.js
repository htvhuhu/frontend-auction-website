import React, { useContext, useEffect, useState } from 'react';
import productService from '../../services/ProductService';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ImageUpload from '../../components/layout/ImageUpload';
import {useNavigate, useParams} from "react-router-dom";
import { PRODUCT_STATUS } from '../../util/constant';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { AuthContext } from '../../services/AuthProvider';


const CreateProduct = () => {
    const today = new Date().toISOString().split('T')[0];
    const categories = [
        'Electronics', 'Clothing', 'Books', 'Home Appliances', 
        'Automobiles', 'Beauty & Personal Care', 'Computers', 'Furniture', 
        'Gardening', 'Groceries', 'Health & Fitness', 'Jewelry', 
        'Kitchen Appliances', 'Musical Instruments', 'Pets', 'Sports Equipment',
        'Toys & Games', 'Phones & Accessories', 'Outdoor', 'Travel & Luggage'
    ].map(category => ({ label: category, value: category }));

    const { email } = useContext(AuthContext);
    const [product, setProduct] = useState({ 
        name: '', 
        description: '', 
        categories: [],
        deposit: '', 
        bidStartPrice: '', 
        bidDueDate: today,
        paymentDueDate: today,
        status: '',
        images:[],
        conditionOfSale:"",
        shippingInformation:"",
        owner: email,
        created: new Date()
    });
    const navigate = useNavigate();
    const setImages = (images)=>{
        const newImages = images.map((img,index)=>({id: product?.images[index]?.id, name:img.name}));
        setProduct({ ...product, images: newImages});
    }

    const params = useParams();
    useEffect(()=>{
        if(params?.id){
            (async ()=>{
                const response = await productService.getProductsById(params.id);
                setProduct(response.data);
            })();
        }
    },[params.id])

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (selectedOptions) => {
            setProduct({...product, categories: selectedOptions ? selectedOptions.map(o=>o.value) : []
        });
    };
    

    const handleSave = async (release) => {
        try {
            if (release === "release") {
                const requiredFields = [
                    'name', 
                    'description', 
                    'deposit', 
                    'bidStartPrice', 
                    'bidDueDate', 
                    'paymentDueDate', 
                    'conditionOfSale', 
                    'shippingInformation'
                ];
            
                const isAnyFieldEmpty = requiredFields.some(field => !product[field] || product[field] === '');
                const areCategoriesEmpty = !product.categories || product.categories.length === 0;
            
                if (isAnyFieldEmpty || areCategoriesEmpty) {
                    toast.error("Please input all information to release!");
                    return;
                }
            }
            const newProduct = { ...product, status: release,owner:email };
            console.log(newProduct);
            if(params?.id){
                await productService.updateProduct(params.id,newProduct);
            }else{
                await productService.addProduct(newProduct);
            }
            toast.success('Product saved successfully!');
        } catch (error) {
            console.error('There was an error!', error);
            toast.error('There was an error saving the product.');

        }
        navigate("/seller/products");
    };

    return (
        <div className="container mt-3 seller-product-add-container">
            <h2>{params?.id ? "Edit Product" : "Add Product"}</h2>
            <form className='seller-product-add-form' onSubmit={(e) => e.preventDefault()}>
                 
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={product.name} 
                    onChange={handleChange} 
                    className="form-control" 
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea 
                    id="description"
                    name="description" 
                    value={product.description} 
                    onChange={handleChange} 
                    className="form-control"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="categories">Categories</label>
                <Select 
                    id="categories"
                    name="categories"
                    options={categories} 
                    value={categories.filter(option => product.categories.includes(option.value))}
                    onChange={handleCategoryChange} 
                    className="form-control"
                    isMulti
                    isSearchable
                />
            </div>

            <div className="form-group">
                <label htmlFor="shippingInformation">Shipping Information</label>
                <textarea 
                    id="shippingInformation"
                    name="shippingInformation" 
                    value={product.shippingInformation} 
                    onChange={handleChange} 
                    className="form-control"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="conditionOfSale">Condition Of Sale</label>
                <textarea 
                    id="conditionOfSale"
                    name="conditionOfSale" 
                    value={product.conditionOfSale} 
                    onChange={handleChange} 
                    className="form-control"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="bidStartPrice">Starting Price</label>
                <input 
                    type="number" 
                    id="bidStartPrice"
                    name="bidStartPrice" 
                    value={product.bidStartPrice} 
                    onChange={handleChange} 
                    className="form-control" 
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="deposit">Deposit</label>
                <input 
                    type="number" 
                    id="deposit"
                    name="deposit" 
                    value={product.deposit} 
                    onChange={handleChange} 
                    className="form-control" 
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="bidDueDate">Bid Due Date</label>
                <input 
                    type="date" 
                    id="bidDueDate"
                    name="bidDueDate" 
                    value={product.bidDueDate} 
                    onChange={handleChange} 
                    className="form-control"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="paymentDueDate">Payment Due Date</label>
                <input 
                    type="date" 
                    id="paymentDueDate"
                    name="paymentDueDate" 
                    value={product.paymentDueDate} 
                    onChange={handleChange} 
                    className="form-control" 
                    required 
                />
            </div>
            
            <ImageUpload setImgs={setImages} />
                
                <div>
                    {product.images?.map((image) => (
                        <img key={image.id} src={productService.getProductImage(image.name)} alt={image.name} height={100} width={100} />
                    ))}
                </div>

                <div>
                    
                <button 
                    type="button" 
                    onClick={() => handleSave(`${PRODUCT_STATUS.DRAFT}`)}
                    style={{width:"50%"}}
                    className="btn btn-primary mr-5">
                    Save draft
                </button>

                <button 
                    type="button" 
                    onClick={() => handleSave(`${PRODUCT_STATUS.RELEASE}`)} 
                    style={{width:"50%"}}
                    className="btn btn-success">
                    Release
                </button>
                
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;
