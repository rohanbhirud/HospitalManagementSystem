import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addMedicine } from '../../api/pharmacistApi';

const AddMedicine = () => {
  const [medicineName, setMedicineName] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const medicine = {
      medicineName,
      price,
      qty
    };

    try {
      const response = await addMedicine(medicine);
      console.log('Medicine added:', response.data);
      setMedicineName('');
      setPrice('');
      setQty('');
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
    navigate('/pharmacist/inventory')
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="medicineName">
          <Form.Label>Medicine Name</Form.Label>
          <Form.Control
            type="text"
            value={medicineName}
            onChange={(event) => setMedicineName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="qty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={qty}
            onChange={(event) => setQty(event.target.value)}
            required
          />
        </Form.Group><br/>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddMedicine;
