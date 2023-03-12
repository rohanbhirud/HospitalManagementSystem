package hospital.backend.repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Prescription;



@Repository
public interface PrescriptionRepository  extends JpaRepository<Prescription, Integer>{

	@Transactional
	@Modifying(flushAutomatically = true, clearAutomatically = true)
	@Query(value = "select * from prescription  where patient_id=:pid", nativeQuery = true)
	List<Prescription> findByPatientId(@Param("pid") Integer patientId);

	@Query(value = "select * from prescription  where patient_id=:pid and prescription_id=:pcpid", nativeQuery = true)
	List<Prescription> findByPrescptionIdAndPatientId(@Param("pcpid") Integer prescptionId,
			@Param("pid") Integer patientId);

	@Query(value = "select * from prescription  where doctor_id=:docid and patient_id=:pid", nativeQuery = true)
	List<Prescription> findByPatientIdAndDoctorId(@Param("pid") Integer patientId, @Param("docid") Integer doctorId);

	@Query(value = "select * from prescription  where doctor_id=:did", nativeQuery = true)
	List<Prescription> findByDoctorId(@Param("did") Integer doctorId);

}
