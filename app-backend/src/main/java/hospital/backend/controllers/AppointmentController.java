package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.models.Appointment;
import hospital.backend.models.Doctor;
import hospital.backend.models.Patient;
import hospital.backend.repo.AppointmentRepository;
import hospital.backend.repo.DoctorRepo;
import hospital.backend.repo.PatientRepository;
import hospital.backend.requests.AppointmentDTO;

@RestController
@RequestMapping("/api/v1/appointment")
@CrossOrigin
public class AppointmentController {

	

@Autowired 
private UserDetailsService userService;

@Autowired
private DoctorRepo doctorRepo;

@Autowired
private PatientRepository patientRepo;

@Autowired
private AppointmentRepository appointmentRepo;

@PostMapping
public ResponseEntity<Appointment> createAppointment(@RequestBody AppointmentDTO appointment) throws Exception{
	Appointment newAppoint=new Appointment();
	newAppoint.setDate(appointment.getDate());
	newAppoint.setTime(appointment.getTime());
	newAppoint.setAppointmentStatus(appointment.isAppointmentStatus());
	Patient patient = patientRepo.findByPatientId(appointment.getPatientId());
	Doctor doctor = doctorRepo.findByDoctorId(appointment.getDoctorId());
//	if(patient==null || doctor == null) {
//		throw new Exception("Invalid details");
//	}
	newAppoint.setPatient(patient);
	newAppoint.setDoctor(doctor);
	appointmentRepo.save(newAppoint);
	return ResponseEntity.ok(newAppoint);
	
}

@PutMapping("change/{appointmentId}/{status}")
public ResponseEntity changeAppointmentStatus(@PathVariable int appointmentId,@PathVariable boolean status) {
	Appointment appointment = appointmentRepo.findByAppointmentId(appointmentId);
	appointment.setAppointmentStatus(status);
	appointmentRepo.save(appointment);
	return ResponseEntity.ok("Appointment status changed");
}

@GetMapping 
public List<Appointment> getAppointmentDetails() {
	List<Appointment> appoint=appointmentRepo.findAll();
	return appoint;
}

@PutMapping("/{appointmentid}")
public ResponseEntity updateAppointmentDetails(@RequestBody Appointment appointment,@PathVariable(name="appointmentid") int  appointmentid) {
	Appointment appoint=appointmentRepo.findByAppointmentId(appointmentid);
	appoint.setAppointmentStatus(appointment.isAppointmentStatus());
	appoint.setDate(appointment.getDate());
	appoint.setTime(appointment.getTime());
	appoint.setPatient(appointment.getPatient());
	appointmentRepo.save(appoint);
	
	
	
	return ResponseEntity.ok("appointment updated");
	
}
@DeleteMapping("/{appointmentid}")
public ResponseEntity deleteAppointmentDetails(@PathVariable (name="appointmentid") int appointmentid) {
	appointmentRepo.deleteById(appointmentid);
	return ResponseEntity.ok("deleted appointment");
	
	
}

@GetMapping("/{doctorId}/{appointmentStatus}")
public List<Appointment> getByDoctorAndFalseAppointmentStatus(@PathVariable int doctorId, @PathVariable boolean appointmentStatus) {
	return appointmentRepo.getAppointmentByDoctorAndAppointmentStatus(doctorId,appointmentStatus);
}

}

