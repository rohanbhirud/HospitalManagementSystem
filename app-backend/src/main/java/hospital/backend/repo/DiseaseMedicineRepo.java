package hospital.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import hospital.backend.models.DiseasesMedicine;

public interface DiseaseMedicineRepo extends JpaRepository<DiseasesMedicine, Integer> {
	
	public List<DiseasesMedicine> findAllByDisease(String disease);
}
