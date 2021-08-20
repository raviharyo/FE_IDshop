import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/rating'
import axios from 'axios'
import {numberFormat} from '../helpers/index'

// import nya jangan lupa langsung ambil dari json products. function find cuma buat nggoleki tok
const Productpage = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [])
   
    return (
        <>
            <Link className="btn btn-light my-3" to='/'>
                Back
          </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating stars={product.rating}
                             reviews={product.numReviews}>
                             </Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: {numberFormat(product.price)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col><strong>{numberFormat(product.price)}</strong></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>status:</Col>
                        <Col>
                            {product.countInStock>0?'In Stock':'Out of Stock'}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className="btn-block" type="button" disabled={product.countInStock === 0 }>Add to Cart</Button>
                </ListGroup.Item>
                </ListGroup>
            </Card>
                </Col>
            </Row>
        </>
    )
}

export default Productpage
