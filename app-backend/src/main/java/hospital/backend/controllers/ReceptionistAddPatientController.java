package hospital.backend.controllers;

import java.util.List;
import java.util.Optional;

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

import hospital.backend.models.Patient;
import hospital.backend.models.User;
import hospital.backend.repo.AppointmentRepository;
import hospital.backend.repo.PatientRepository;
import hospital.backend.repo.UserRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class ReceptionistAddPatientController {



@Autowired
private UserDetailsService userService;

@Autowired
private PatientRepository patientRepo;

@PostMapping
public ResponseEntity<Patient> createPatient(@RequestBody Patient patient){
	Patient pat=new Patient();
	pat.setPatientName(patient.getPatientName());
	pat.setAddress(patient.getAddress());
	pat.setPhone(patient.getPhone());
	pat.setAge(patient.getAge());
	pat.setEmail(patient.getEmail());
	pat.setGender(patient.getGender());
   patientRepo.save(pat);
	return ResponseEntity.ok(pat);
}

@GetMapping 
public List<Patient> getPatientDetails() {
	List<Patient> patient=patientRepo.findAll();
	return patient;
}

@PutMapping("/{patientid}")
public ResponseEntity updatePatientDetails(@RequestBody Patient patient,@PathVariable(name="patientid") int  patientid) {
	Patient pat= patientRepo.findByPatientId(patientid);
	pat.setPatientName(patient.getPatientName());
	pat.setAddress(patient.getAddress());
	pat.setPhone(patient.getPhone());
	pat.setAge(patient.getAge());
	pat.setEmail(patient.getEmail());
	pat.setGender(patient.getGender());
	patientRepo.save(pat);
	
	
	return ResponseEntity.ok("patient updated");
	
}
@DeleteMapping("/{patientid}")
public ResponseEntity deletePatientDetails(@PathVariable (name="patientid") int patientid) {
	patientRepo.deleteById(patientid);
	return ResponseEntity.ok("deleted patient");
	
	
}

}
