package hospital.backend.service;

import hospital.backend.models.MedicineStore;

public interface MedicineStoreService {
	public MedicineStore loadMedicineStoreByMedicineId(Integer medicineId);
}
