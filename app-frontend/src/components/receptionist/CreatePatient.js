import React,{useState} from "react";
import { Button,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createPatient } from "../../api/receptionistApi";

const CreatePatient=()=>{
    const[patientName,setPatientName]=useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [inOutStatus, setInOutStatus] = useState('');
 const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const patient={
          "patientId":null,
          "patientName":patientName,
          "email":email,
          "phone":phone,
          "gender":gender,
          "age":age,
          "address":address,
          "inOutStatus":inOutStatus
        }
        console.log(patient)
        try{
            const response=await createPatient(patient);
            console.log('patient added'+response.data);
            
        }
        catch(error){
            console.error('error in creating patient',error);
        }
        navigate(-1);
    };

    return(
        <div>
            <h2>Create Patient</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="patientName">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control
            type="text"
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </Form.Group><br/>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          />
        </Form.Group><br/>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </Form.Group><br/>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </Form.Group><br/>

        <Form.Group controlId="inOutStatus">
          <Form.Label>InOutStatus</Form.Label>
          <Form.Control
            type="text"
            value={inOutStatus}
            onChange={(event) => setInOutStatus(event.target.value)}
            required
          />
        </Form.Group><br/>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
   


        </div>
    )
}


export default CreatePatient;