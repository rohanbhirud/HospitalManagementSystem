package hospital.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import hospital.backend.models.MedicineStore;
import hospital.backend.models.User;

public interface MedicineRepository extends JpaRepository<MedicineStore, Integer> {
	MedicineStore findBymedicineId(Integer medicineId);
}
