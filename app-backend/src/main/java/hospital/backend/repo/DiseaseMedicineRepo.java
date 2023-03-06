package hospital.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.DiseasesMedicine;

@Repository
public interface DiseaseMedicineRepo extends JpaRepository<DiseasesMedicine, Integer> {
	
	public List<DiseasesMedicine> findAllByDisease(String disease);
}
