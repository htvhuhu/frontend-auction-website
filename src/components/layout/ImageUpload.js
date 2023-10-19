import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageUpload = ({imgs,setImgs}) => {
    const [files, setFiles] = useState(null);
    const [images, setImages] = useState(imgs || []);

    useEffect(()=>{
        if(setImgs){
            setImgs(images);
        }
    },
    [images]);

    const onFileChange = (e) => {
        setFiles(e.target.files);
    };

    const onUpload = async (e) => {
        e.preventDefault(); 
        
        if(!files){
            alert("Please choose images!");
            return;
        }
        const formData = new FormData();
        
        for (let file of files) { // Loop through and append each file
            formData.append('files', file);
        }
    
        try {
            const response = await axios.post('http://localhost:8080/api/v1/seller/products/images', formData, {  // Change endpoint to handle multiple files
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(images, response.data)
            setImages([...images, ...response.data]);
        } catch (error) {
            console.error("There was an error uploading the files!", error);
        }
        
    };
    

    return (
        <div>
            <input type="file" onChange={onFileChange} multiple />
            <button type='button' onClick={onUpload} disabled={files?.length === 0} >Upload</button>

            <div>
                {images?.map((image) => (
                    <img key={image.id} src={image.url} alt={image.name} height={100} width={100} />
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
