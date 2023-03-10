import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Bill = () => {
  const location = useLocation();
  const { state } = location || {};
  const { patientName, medicines, totalCharges } = state;

  return (
    <>
      <h2>Bill</h2>
      <span><h4>Patient Name: {patientName}</h4></span><br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((m) => (
            <tr key={m.medicineName}>
              <td>{m.medicineName}</td>
              <td>{m.price}</td>
              <td>{m.qty}</td>
              <td>{m.qty * m.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="lead">Total charges: {totalCharges}</p>
      <Button variant="primary" onClick={() => window.print()}>
        Print Bill
      </Button>
    </>
  );
};

export default Bill;
