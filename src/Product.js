import React, { useState, useEffect } from 'react';
import Parse from 'parse/dist/parse.min.js';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Product = () => {
    const [productname, setProductname] = useState('');
    const [productid, setProductid] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [products, setProducts] = useState([]);

    async function addProduct() {
        try {
            const Product = new Parse.Object('Product');

            Product.set('name', productname);
            Product.set('productid', parseInt(productid));
            Product.set('price', parseInt(price));
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

    async function fetchProducts() {
        try {
            const query = new Parse.Query('Product');
            const result = await query.find();
            setProducts(result);
        } catch (error) {
            console.log('Error fetching products: ', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

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

            <Button variant="success" onClick={addProduct}>Save Product</Button>

            {
                products.map((product) => (
                    <Card key={product.id} style={{ width: '16rem' }}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://assets.ajio.com/medias/sys_master/root/20230718/MrSH/64b6b5a8a9b42d15c95db25f/-473Wx593H-469520818-green-MODEL5.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://assets.ajio.com/medias/sys_master/root/20230718/MrSH/64b6b5a8a9b42d15c95db25f/-473Wx593H-469520818-green-MODEL5.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                        </Carousel>
                        <Card.Body>

                            <Card.Title>{product.get('name')}</Card.Title>
                            <h1>${product.get('price')}</h1>
                            <Card.Text>
                                {product.get('description')}
                            </Card.Text>
                            <Button variant="primary" style={{ marginRight: '2rem' }}>Buy</Button>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                ))}
        </div >
    )
}

