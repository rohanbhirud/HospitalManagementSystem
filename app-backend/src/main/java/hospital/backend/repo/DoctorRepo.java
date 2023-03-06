package hospital.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Doctor;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {
	public List<Doctor> findAllByName(String name);
	public List<Doctor> findAllBySpecialty(String specialty);
}
