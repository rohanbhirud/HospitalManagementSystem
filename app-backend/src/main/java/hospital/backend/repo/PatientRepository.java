package hospital.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>{

	Patient findByPatientName(String name);
<<<<<<< HEAD
	Optional<Patient> findByPatientId(Integer patientId);
=======
	Patient findByPatientId(int patientId);
>>>>>>> df0e266312f0e848c4859302d11efbb00f37953f
	
}
