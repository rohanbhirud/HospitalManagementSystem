package hospital.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hospital.backend.models.MedicineStore;
import hospital.backend.models.User;
import hospital.backend.repo.MedicineRepository;
import hospital.backend.repo.UserRepository;

@Service
@Transactional
public class MedicineStoreDetailsImpl implements MedicineStoreService {
	@Autowired
	private MedicineRepository medicineRepository;
	@Override
	public MedicineStore loadMedicineStoreByMedicineId(Integer medicineId){
		// TODO Auto-generated method stub
		MedicineStore medicinestore = medicineRepository.findByMedicineId(medicineId);
		return medicinestore;
		
	}

}
