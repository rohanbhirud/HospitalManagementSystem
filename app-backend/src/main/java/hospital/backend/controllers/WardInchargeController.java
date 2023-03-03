package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.models.Patient;
import hospital.backend.repo.PatientRepository;

@RestController
@RequestMapping("/api/v1/ward")
@CrossOrigin
public class WardInchargeController {

	@Autowired
	private PatientRepository patientRepo;
	
	@GetMapping
	public List<Patient> getAllPatients(){
		return patientRepo.findAll();
	}
	
	@PutMapping
	public void changeInOutPatientStatus(@RequestBody Patient updatedPatient) throws Exception {
		
		Patient newPatient = patientRepo.findByPatientName(updatedPatient.getPatientName());
		
		if(newPatient!=null) {
			if(newPatient.isInOutStatus()) {
				newPatient.setInOutStatus(false);
			} else {
				newPatient.setInOutStatus(true);
			}
			patientRepo.save(newPatient);
		} else {
			throw new Exception("Failed to change status");
		}
	}
}
