package hospital.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.DiseasesLabTest;

@Repository
public interface DiseaseLabTestRepo extends JpaRepository<DiseasesLabTest, Integer> {
	
	public List<DiseasesLabTest> findAllByDisease(String disease);
}
