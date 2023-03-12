import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllMedicine, getMedicineByName, updateMedicine } from '../../api/pharmacistApi';

const GiveMedicine = () => {
  const [patientName, setPatientName] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [medicineSearch, setMedicineSearch] = useState('');
  const [medicineQty, setMedicineQty] =useState(0);
  const [totalCharges, setTotalCharges] = useState(0);
  const [medicineOptions, setMedicineOptions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await getAllMedicine();
        
        setMedicineOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedicines();
  }, []);

  useEffect(() => {
    const charges = medicines.reduce((total, m) => total + m.qty * m.price, 0);
    setTotalCharges(charges);
  }, [medicines]);

  const handleAddMedicine = async () => {
    // Find the medicine with the matching name
    const newmedicine = medicineOptions.find((m) => m.medicineName === medicineSearch);
    console.log("newmedicine:",newmedicine)
    setMedicines([...medicines, {medicineId:newmedicine.medicineId, medicineName: newmedicine.medicineName, qty: Number(medicineQty), totalQty: newmedicine.qty ,price: Number(newmedicine.price) }]);
    setMedicineSearch('');
    setMedicineQty('');
  };

  const handleRemoveMedicine = (medicineName) => {
    const updatedMedicines = medicines.filter((m) => m.medicineName !== medicineName);
    setMedicines(updatedMedicines);
  };

  const handleNavigateToBill = async () => {
    // Make an API call to update each medicine's quantitye
    try {
      await Promise.all(medicines.map((m) => updateMedicine({
        "medicineId":m.medicineId,
        "medicineName":m.medicineName,
        "qty":m.totalQty-m.qty,
        "price":m.price
      })));
      navigate('/pharmacist/givemedicine/bill', { state: { patientName, medicines, totalCharges } });
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <>
      <h2>Give Medicines</h2>
      <Form>
        <Form.Group className="mb-3" controlId="patientName">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="text" placeholder="Enter patient name" value={patientName} onChange={(e)=> setPatientName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="medicineSearch">
          <Form.Label>Medicine Search</Form.Label>
          <Form.Control type="text" placeholder="Enter medicine name" value={medicineSearch} onChange={(e)=>setMedicineSearch(e.target.value)} />

          <Table striped bordered hover size="sm" className="mt-3">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Add</th>
              </tr>
            </thead>
            <tbody>
              {medicineOptions
                .filter((m) => m.medicineName.toLowerCase().includes(medicineSearch.toLowerCase()))
                .slice(0, 5)
                .map((m) => (
                  <tr key={m._id}>
                    <td>{m.medicineName}</td>
                    <td>{m.price}</td>
                    <td>{m.qty}</td>
                    <td>
                      <Button variant="primary" size="sm" onClick={() => setMedicineSearch(m.medicineName)}>
                        Add
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Form.Group>

        <Form.Group className="mb-3" controlId="medicineQty">
          <Form.Label>Medicine Quantity</Form.Label>
          <Form.Control type="number" placeholder="Enter medicine quantity" value={medicineQty} onChange={(e) => setMedicineQty(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleAddMedicine}>
          Add Medicine
        </Button>

        <Table striped bordered hover size="sm" className="mt-3">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((m) => (
              <tr key={m.medicineName}>
                <td>{m.medicineName}</td>
                <td>{m.price}</td>
                <td>{m.qty}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleRemoveMedicine(m.medicineName)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h4>Total Charges: {totalCharges}</h4>

        <Button variant="primary" onClick={handleNavigateToBill}>
          Generate Bill
        </Button>
      </Form>
    </>
  );
};

export default GiveMedicine;