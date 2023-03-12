package hospital.backend.repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import hospital.backend.models.Appointment;
import hospital.backend.models.Doctor;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{
Appointment findByAppointmentId(int appointmentId);

@Query(value="select * from appointment where doctor_id=:did and appointment_status=:status",nativeQuery = true)
List<Appointment> getAppointmentByDoctorAndAppointmentStatus(@Param("did") int did, @Param("status") boolean status);
}
