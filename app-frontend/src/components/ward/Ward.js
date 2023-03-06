import '../../css/Ward.css';
import React, { useEffect, useState } from 'react'
import { getAllPatients, updatePatient } from '../../api/wardApi';

const Ward = () => {

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllPatients().then((response) => {
      setPatients(response);
      console.log(response)
    })
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleInOutStatusChange = (e, patientId) => {
    const updatedPatients = patients.map(patient => {
      if (patient.patientId === patientId) {
        return { ...patient, inOutStatus: e.target.value === 'true' };
      }
      return patient;
    });
    setPatients(updatedPatients);
  }

  const handleUpdatePatient = (patientId) => {
    const patientToUpdate = patients.find(patient => patient.patientId === patientId);
    updatePatient(patientToUpdate).then(() => {
      console.log(`Updated patient ${patientId}`);
    }).catch(error => {
      console.error(error);
    });
  }

  const filteredPatients = patients.filter(patient =>
    patient.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container mt-5'>
      <div className='search'>
        <label>Search: </label>
        <input type='text' value={search} onChange={handleSearchChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>In/Out Status</th>
            <th>Submit Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.patientName}</td>
              <td>{patient.age}</td>
              <td>
                <select
                  id={`inOutStatus-${patient.patientId}`}
                  value={patient.inOutStatus}
                  onChange={(e) => handleInOutStatusChange(e, patient.patientId)}
                >
                  <option value='true'>In</option>
                  <option value='false'>Out</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleUpdatePatient(patient.patientId)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ward;