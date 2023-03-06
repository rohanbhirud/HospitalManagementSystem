package hospital.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Patient;
import hospital.backend.models.Report;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer>{
	
	@Query(value="select * from report where patient_id=:pid",nativeQuery = true)
	List<Report> findByPatientId(@Param("pid") Patient patientId);

}
