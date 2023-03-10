package hospital.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>{

	Patient findByPatientName(String name);

	Optional<Patient> findByPatientId(Integer patientId);

	Patient findByPatientId(int patientId);
	
}
