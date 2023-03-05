package hospital.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import hospital.backend.models.DiseasesLabTest;

public interface DiseaseLabTestRepo extends JpaRepository<DiseasesLabTest, Integer> {
	
	public List<DiseasesLabTest> findAllByDisease(String disease);
}
