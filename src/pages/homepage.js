import React, {useState,useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Compproducts from '../components/product'
import axios from 'axios'

const Homepage = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async()=>{
            const {data} = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
       <>
       <h1>Latest Products</h1>
        <Row>
            
                {products.map((product)=>(
                    <Col sm={12} md={6} lg = {4} xl = {3} >
                    <Compproducts product={product} ></Compproducts>
                    </Col>
                ))}
            
        </Row>
       </>
    )
}

export default Homepage
