package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import hospital.backend.repo.AppointmentRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AppointmentController {

	

@Autowired 
private UserDetailsService userService;

@Autowired
private AppointmentRepository appointmentRepo;

@PostMapping
public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment){
	Appointment appoint=new Appointment();
	appoint.setAppointmentStatus(appointment.isAppointmentStatus());
	appoint.setDate(appointment.getDate());
	appoint.setTime(appointment.getTime());
	appoint.setPatient(appointment.getPatient());
	appointmentRepo.save(appoint);
	return ResponseEntity.ok(appoint);
	
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


}

