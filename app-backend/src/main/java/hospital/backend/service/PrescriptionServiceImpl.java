package hospital.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
<<<<<<< HEAD
=======
import org.springframework.transaction.annotation.Transactional;
>>>>>>> df0e266312f0e848c4859302d11efbb00f37953f

import hospital.backend.models.DiseasesLabTest;
import hospital.backend.models.DiseasesMedicine;
import hospital.backend.repo.DiseaseLabTestRepo;
import hospital.backend.repo.DiseaseMedicineRepo;
import hospital.backend.responses.Prescription;

@Service
<<<<<<< HEAD
=======
@Transactional
>>>>>>> df0e266312f0e848c4859302d11efbb00f37953f
public class PrescriptionServiceImpl implements PrescriptionService {
	
	@Autowired
	DiseaseMedicineRepo medicineRepo;
	
	@Autowired
	DiseaseLabTestRepo labRepo;

	@Override
	public Prescription getPrescription(String disease) {
		Prescription pres = new Prescription();
		List<String> medicines = new ArrayList<>();
		List<DiseasesMedicine> meds = medicineRepo.findAllByDisease(disease);
		for (DiseasesMedicine med: meds) {
			medicines.add(med.getName());
		}
		pres.setMedicines(medicines);
		
		List<String> tests = new ArrayList<>();
		List<DiseasesLabTest> labTests = labRepo.findAllByDisease(disease);
		for (DiseasesLabTest labTest: labTests) {
			tests.add(labTest.getLabTest());
		}
		pres.setLabTest(tests);
		return pres;
	}

}
