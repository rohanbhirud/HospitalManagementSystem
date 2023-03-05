package hospital.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import hospital.backend.models.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor, Integer> {
	public List<Doctor> findAllByName(String name);
	public List<Doctor> findAllBySpecialty(String specialty);
}
