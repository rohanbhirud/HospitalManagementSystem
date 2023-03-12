package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
@RequestMapping("api/v1/pharmacist")
@CrossOrigin
public class PharmacistController {
	@Autowired
	private MedicineStoreService medservice;
	@Autowired
	private MedicineRepository mediRepo;

	@GetMapping
	public MedicineStore getMedicineStore(@RequestBody MedicineDTO medicine) throws MedicineStoreNotFoundException {

		MedicineStore medistore = mediRepo.findByMedicineId(medicine.getMedicineId());
		if (medistore == null) {
			throw new MedicineStoreNotFoundException();

		}
		return medistore;

	}

	@PostMapping
	public void createMedicineStore(@RequestBody MedicineDTO newmedistore) throws InvalidMedicineStoreException {

		mediRepo.save(
				new MedicineStore(newmedistore.getMedicineName(), newmedistore.getPrice(), newmedistore.getQty()));

	}

	@DeleteMapping
	public void deleteMedicineStore(@RequestBody MedicineDTO medicine) throws Exception {
		MedicineStore medistoreToDelete = mediRepo.findByMedicineId(medicine.getMedicineId());
		if (medistoreToDelete != null) {
			mediRepo.delete(medistoreToDelete);
		} else {
			throw new Exception("Medicine deletion failed");
		}
	}

	@PutMapping
	public void updateMedicineStore(@RequestBody MedicineDTO updatedMedicineStore) throws Exception {

		MedicineStore medistoreToUpdate = mediRepo.findByMedicineId(updatedMedicineStore.getMedicineId());
		if (medistoreToUpdate != null) {
			medistoreToUpdate.setMedicineName(updatedMedicineStore.getMedicineName());
			medistoreToUpdate.setPrice(updatedMedicineStore.getPrice());
			medistoreToUpdate.setQty(updatedMedicineStore.getQty());
			System.out.println(medistoreToUpdate);
			mediRepo.save(medistoreToUpdate);

		} else {
			throw new Exception("medicine updation failed");
		}

	}

	@GetMapping("/all")
	public List<MedicineStore> getAllMedicineStore() {
		return mediRepo.findAll();

	}

	@GetMapping("/medicinename")
	public MedicineStore getByMedicineName(@RequestBody MedicineDTO medicine) {
		return mediRepo.findByMedicineName(medicine.getMedicineName());
	}
}