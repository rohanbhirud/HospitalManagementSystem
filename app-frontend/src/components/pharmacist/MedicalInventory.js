import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteMedicine, getAllMedicine, updateMedicine } from '../../api/pharmacistApi';

const MedicalInventory = () => {
    const [medicines, setMedicines] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllMedicine()
            .then((response) => {
                setMedicines(response.data);
                console.log(response.data)
            })
            .catch((error) => console.error(error));
    }, []);

    const handleEdit = (medicineId) => {
        const updatedMedicines = medicines.map(medicine => {
            if (medicine.medicineId === medicineId) {
                return { ...medicine, editing: true };
            } else {
                return medicine;
            }
        });
        setMedicines(updatedMedicines);
    };

    const handleInputChange = (medicineId, field, value) => {
        const updatedMedicines = medicines.map(medicine => {
            if (medicine.medicineId === medicineId) {
                return { ...medicine, [field]: value };
            } else {
                return medicine;
            }
        });
        setMedicines(updatedMedicines);
    };

    const handleCancelEdit = (medicineId) => {
        const updatedMedicines = medicines.map(medicine => {
            if (medicine.medicineId === medicineId) {
                return { ...medicine, editing: false };
            } else {
                return medicine;
            }
        });
        setMedicines(updatedMedicines);
    };

    const handleSave = (medicineId) => {
        const medicineToUpdate = medicines.find(medicine => medicine.medicineId === medicineId);
        updateMedicine(medicineToUpdate)
            .then(() => {
                const updatedMedicines = medicines.map(medicine => {
                    if (medicine.medicineId === medicineId) {
                        return { ...medicine, editing: false };
                    } else {
                        return medicine;
                    }
                });
                setMedicines(updatedMedicines);
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = (medicineId) => {
        deleteMedicine(medicineId)
            .then(() => {
                const updatedMedicines = medicines.filter(medicine => medicine.medicineId !== medicineId);
                setMedicines(updatedMedicines);
            })
            .catch((error) => console.error(error));
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Medicine ID</th>
                    <th>Medicine Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {medicines.map((medicine) => (
                    <tr key={medicine.medicineId}>
                        {medicine.editing ? (
                            <>
                                <td>{medicine.medicineId}</td>
                                <td><input type="text" value={medicine.medicineName} onChange={(e) => handleInputChange(medicine.medicineId, 'medicineName', e.target.value)} /></td>
                                <td><input type="text" value={medicine.price} onChange={(e) => handleInputChange(medicine.medicineId, 'price', e.target.value)} /></td>
                                <td><input type="text" value={medicine.qty} onChange={(e) => handleInputChange(medicine.medicineId, 'qty', e.target.value)} /></td>
                                <td>
                                    <Button variant="primary" onClick={() => handleSave(medicine.medicineId)}>Save</Button>{' '}
                                    <Button variant="secondary" onClick={() => handleCancelEdit(medicine.medicineId)}>Cancel</Button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{medicine.medicineId}</td>
                                <td>{medicine.medicineName}</td>
                                <td>{medicine.price}</td>
                                <td>{medicine.qty}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(medicine.medicineId)}>Edit</Button>{' '}
                                    <Button variant="danger" onClick={() => handleDelete(medicine.medicineId)}>Delete</Button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default MedicalInventory