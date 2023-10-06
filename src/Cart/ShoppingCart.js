import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';
import { GiShoppingCart } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const ShoppingCart = () => {
 const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Elixinol', category: 'Supplements', price: 4580, quantity: 1 },
 ]);
 const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
 };
 const handleQuantityChange = (id, event) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(event.target.value) };
      }
      return item;
    });
    setCartItems(updatedCartItems);
 };
 const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
 };
 return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>
            <GiShoppingCart /> Shopping Cart
          </h2>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                 <Col md={6}>
                    <h5>{item.name}</h5>
                    <p>{item.category}</p>
                 </Col>
                 <Col md={2}>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                    />
                 </Col>
                 <Col md={2}>
                    <h5>${item.price}</h5>
                 </Col>
                 <Col md={2}>
                 <Button variant="danger" onClick={() => handleRemove(item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                 </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h3>Total: ${calculateTotal()}</h3>
              <Button variant="success">Checkout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
 );
};
export default ShoppingCart;