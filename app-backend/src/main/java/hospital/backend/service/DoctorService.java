package hospital.backend.service;

import java.time.LocalDate;
import java.util.List;

import hospital.backend.models.Appointment;
import hospital.backend.models.Prescription;

public interface DoctorService {
	Prescription createPrescription(Integer did, Integer pid, String a, String diag,LocalDate precDate);


	Prescription getPrecsptionById(Integer precpId);

	List<Prescription> listPrescriptationDid(Integer did);

	List<Prescription> listPrescriptionByPid(Integer pid);

	List<Prescription> listAllPrescriptation();

	List<Appointment> getAllAppointments();
	
	List<Appointment> getAppointment(int docId);
}
