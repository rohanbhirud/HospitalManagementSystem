package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.exceptions.InvalidAuthorityException;
import hospital.backend.exceptions.InvalidMedicineStoreException;
import hospital.backend.exceptions.MedicineStoreNotFoundException;
import hospital.backend.models.MedicineStore;
import hospital.backend.models.User;
import hospital.backend.repo.MedicineRepository;
import hospital.backend.requests.MedicineDTO;
import hospital.backend.requests.UserDTO;
import hospital.backend.service.MedicineStoreService;

@RestController
public class MedicineStoreController {
@Autowired
private MedicineStoreService medservice;
@Autowired
private MedicineRepository mediRepo;
@GetMapping
public MedicineStore getMedicineStore(@RequestBody Integer medicineId) throws  MedicineStoreNotFoundException{

	MedicineStore medistore = mediRepo.findBymedicineId(medicineId);
	if ( medistore== null) {
		throw new MedicineStoreNotFoundException();

	}
	return medistore;

}
@PostMapping
public void createMedicineStore(@RequestBody MedicineDTO newmedistore) throws InvalidMedicineStoreException {

	mediRepo.save(new MedicineStore(newmedistore.getMedicineId(),newmedistore.getMedicineName(),newmedistore.getPrice(),newmedistore.getQty()));
			
}
@DeleteMapping
public void deleteMedicineStore(@RequestBody Integer medicineId) throws Exception {
	MedicineStore medistoreToDelete = mediRepo.findBymedicineId(medicineId);
	if (medistoreToDelete != null) {
		mediRepo.delete(medistoreToDelete);
	} else {
		throw new Exception("Medicine deletion failed");
	}
}
@PutMapping
public void updateMedicineStore(@RequestBody MedicineDTO updatedMedicineStore) throws Exception {
	
	MedicineStore medistoreToUpdate = mediRepo.findBymedicineId(updatedMedicineStore.getMedicineId());
	if (medistoreToUpdate != null) {
		medistoreToUpdate.setMedicineName(updatedMedicineStore.getMedicineName());
		medistoreToUpdate.setPrice(updatedMedicineStore.getPrice());
		medistoreToUpdate.setQty(updatedMedicineStore.getQty());
        
		mediRepo.save(medistoreToUpdate);
        
    } else {
    	throw new Exception("medicine updation failed");
    }
	
}
public List<MedicineStore> getAllMedicineStore(){
	return mediRepo.findAll();

}
}