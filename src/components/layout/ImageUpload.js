import React, { useEffect, useState } from 'react';
import productService from '../../services/ProductService';

const ImageUpload = ({imgs,setImgs}) => {
    const [images, setImages] = useState(imgs || []);

    useEffect(()=>{
        if(setImgs){
            setImgs(images);
        }
    },
    [images]);

    const onFileChange = async (e) => {
        const files = e.target.files;
        const formData = new FormData();
        
        for (let file of files) { // Loop through and append each file
            formData.append('files', file);
        }
    
        try {
            const response = await productService.uploadProductImages(formData);
            console.log(images, response.data)
            setImages([...images, ...response.data]);
        } catch (error) {
            console.error("There was an error uploading the files!", error);
        }
        alert("Images uploaded successfully!");
    };

    

    return (
        <div>
            <input type="file" onChange={onFileChange} multiple />
            {/* <button type='button' onClick={onUpload} disabled={files?.length === 0} >Upload</button> */}

            <div>
                {images?.map((image) => (
                    <img key={image.id} src={image.url} alt={image.name} height={100} width={100} />
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
