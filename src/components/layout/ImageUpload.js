import React, { useEffect, useState } from 'react';
import productService from '../../services/ProductService';

const ImageUpload = ({setImgs}) => {

    const onFileChange = async (e) => {
        const files = e.target.files;
        const formData = new FormData();
        
        for (let file of files) { // Loop through and append each file
            formData.append('files', file);
        }
    
        try {
            const response = await productService.uploadProductImages(formData);
            setImgs(response.data);
        } catch (error) {
            console.error("There was an error uploading the files!", error);
            alert("There was an error uploading the files!");
        }
    };

    

    return (
        <div>
            <input type="file" onChange={onFileChange} multiple />
            {/* <button type='button' onClick={onUpload} disabled={files?.length === 0} >Upload</button> */}
        </div>
    );
};

export default ImageUpload;
