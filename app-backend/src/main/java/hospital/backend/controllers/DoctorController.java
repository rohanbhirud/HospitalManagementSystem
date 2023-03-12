package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.models.Appointment;
import hospital.backend.models.Doctor;
import hospital.backend.models.Prescription;
import hospital.backend.repo.DoctorRepo;
import hospital.backend.service.DoctorService;

@RestController
@RequestMapping("api/v1/doctor")
@CrossOrigin
public class DoctorController {
	
	@Autowired
	DoctorService doctorService;
	
	@Autowired
	private DoctorRepo doctorRepo;
	
	public DoctorController() {
		System.out.println("In constr of " + getClass().getName());
	}
	
	@GetMapping
	public List<Prescription> getAllPrescription() {
		System.out.println("In controller - getAllPrescription ");
		return doctorService.listAllPrescriptation();
	}
	
	
	@PostMapping
	public ResponseEntity<?> createPrescription(@RequestBody Prescription pres) {
		System.out.println("In controller - createPrescription"+pres);
		Prescription createdPrescription= doctorService.createPrescription(pres.getDoctor().getDoctorId(), pres.getPatient().getPatientId(), pres.getPrescription(),pres.getDiagnosis(), pres.getPrescriptionDate());
		System.out.println(createdPrescription.getDoctor().getDoctorId());	
		return new ResponseEntity<>(createdPrescription, HttpStatus.CREATED);
		
	}
	
	
	
	@GetMapping("/patientId/{patientId}-")
	public List<Prescription> getPrescriptionByPId(@PathVariable Integer patientId) {

		System.out.println("In controller - getPrescriptionByPatientId"+patientId);
		return doctorService.listPrescriptionByPid(patientId);
	}

	@GetMapping("/precpId/{precpId}")
	public Prescription getPrecsptionById(@PathVariable Integer precpId) {

		System.out.println("In controller - getPrescriptionByPrecptionId");
		return doctorService.getPrecsptionById(precpId);
	}

	@GetMapping("/docId/{docId}")
	public List<Appointment> getAppointmentByDocId(@PathVariable Integer docId) {

		System.out.println("In controller - getAppointmentByDocId");
		return doctorService.getAppointment(docId);
	}
	
	@GetMapping("/all")
	public List<Doctor> getAllDoctors(){
		return doctorRepo.findAll();
	}
	
}
