import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const Product = () => {
    const [productname, setProductname] = useState('');
    const [productid, setProductid] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');

    async function addProduct() {
        try {

            const Product = new Parse.Object('Product');

            Product.set('name', productname);
            Product.set('productid', productid);
            Product.set('price', price);
            Product.set('brand', brand);

            await Product.save();
            alert('Product saved!');

            setProductname('');
            setProductid('');
            setPrice('');
            setBrand('');
        }
        catch (error) {
            console.log('Error saving product: ', error);
        }
    }

    return (
        <div>
            <input type="text" value={productname} placeholder="Product Name" onChange={(e) => setProductname(e.target.value)}
            />
            <input type="text" value={productid} placeholder="Product ID" onChange={(e) => setProductid(e.target.value)}
            />
            <input
                type="text" value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)}
            />
            <input type="text" value={brand} placeholder="Brand" onChange={(e) => setBrand(e.target.value)}
            />
            <button onClick={addProduct}>Save Product</button>
        </div>
    )
}
