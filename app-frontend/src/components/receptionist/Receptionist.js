
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateAppointment from "./CreateAppointment";
import CreatePatient from "./CreatePatient";
import ReceptionistSidebar from "./ReceptionistSidebar";
import ViewAppointments from "./ViewAppointments";
import ViewPatients from "./ViewPatient";

const Receptionist = () => {
  const navigate = useNavigate();

  const handleCreatePatientClick = () => {
    console.log("create patient clicked")
    navigate('/receptionist/createpatient');
  };

  const handleViewPatientsClick = () => {
    console.log("create patient clicked")
    navigate('/receptionist/viewpatients');
  };

  const handleCreateAppointmentClick = () => {
    console.log("create patient clicked")
    navigate('/receptionist/createappointment');
  };

  const handleViewAppointmentsClick = () => {
    console.log("create patient clicked")
    navigate('/receptionist/viewappointments');
  };

  return (
    <div className='row'>
      <div className='col col-3'>
        <ReceptionistSidebar
          onCreatePatientClick={handleCreatePatientClick}
          onViewPatientsClick={handleViewPatientsClick}
          onCreateAppointmentClick={handleCreateAppointmentClick}
          onViewAppointmentsClick={handleViewAppointmentsClick}
        />
      </div>
      <div className='col'>
        <h2>Receptionist Panel</h2><br />
        <Routes>
          <Route path='/createpatient' element={<CreatePatient />} />
          <Route path='/viewpatients' element={<ViewPatients />} />
          <Route path='/createappointment' element={<CreateAppointment />} />
          <Route path='/viewappointments' element={<ViewAppointments />} />
        </Routes>
      </div>
    </div>
  );
};

export default Receptionist;