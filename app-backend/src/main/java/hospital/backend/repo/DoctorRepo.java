package hospital.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Doctor;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {
	
}
