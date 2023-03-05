package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.requests.DoctorDTO;
import hospital.backend.responses.Prescription;
import hospital.backend.service.DoctorService;
import hospital.backend.service.PrescriptionService;

@RestController
@RequestMapping("api/v1/doctor")
public class DoctorController {
	
	@Autowired
	PrescriptionService prescriptionService;
	
	@Autowired
	DoctorService doctorService;

	
	@PostMapping
	public int addDoctor(@RequestBody DoctorDTO info) {
		return doctorService.addDoctor(info);
	}
	
	@GetMapping("/name/{name}")
	public List<DoctorDTO> doctorsByName(@PathVariable("name") String name) {
		return doctorService.getDoctorByName(name);
	}
	
	@GetMapping("/speciality/{speciality}")
	public List<DoctorDTO> doctorsBySpeciality(@PathVariable("speciality") String speciality) {
		return doctorService.getDoctorBySpeciality(speciality);
	}
	
	@GetMapping("prescription/{disease}")
	public Prescription prescription(@PathVariable("disease") String disease) {
		return prescriptionService.getPrescription(disease);
	}
	
	
}
