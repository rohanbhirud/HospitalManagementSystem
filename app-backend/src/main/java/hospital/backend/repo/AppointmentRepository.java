package hospital.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{

}
