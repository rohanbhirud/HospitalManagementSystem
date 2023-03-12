package hospital.backend.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import hospital.backend.exceptions.DoctorException;
import hospital.backend.exceptions.PatientException;
import hospital.backend.exceptions.PatientHandlingException;
import hospital.backend.models.Appointment;
import hospital.backend.models.Doctor;
import hospital.backend.models.Patient;
import hospital.backend.models.Prescription;
import hospital.backend.repo.AppointmentRepository;
import hospital.backend.repo.DoctorRepo;
import hospital.backend.repo.PatientRepository;
import hospital.backend.repo.PrescriptionRepository;
import hospital.backend.repo.UserRepository;




@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	
	@Autowired
	private PrescriptionRepository PrecRepo;
	@Autowired
	private DoctorRepo DocRepo;
	@Autowired
	private PatientRepository patRepo;
	@Autowired
	private AppointmentRepository appointmentRepository;
	

	@Override
	public Prescription createPrescription(Integer did, Integer pid, String a, String diag, LocalDate precDate) {
		Patient pat = patRepo.findById(pid).orElseThrow(() -> new PatientHandlingException("Invalid Patient Id"));
		Doctor doct = DocRepo.findById(did).orElseThrow(() -> new DoctorException("Invalid Doctor Id"));
		Prescription p = new Prescription(doct, pat, a,diag, precDate);
		return PrecRepo.save(p);
	}


	@Override
	public Prescription getPrecsptionById(Integer precpId) {
		return PrecRepo.findById(precpId).orElseThrow(() -> new DoctorException("Invalid Prescription Id"));
	}

	@Override
	public List<Prescription> listPrescriptationDid(Integer did) {
		//List<Prescription> prescriptationList = 
		return	PrecRepo.findByDoctorId(did);
		//List<Prescription> list = new ArrayList<>();
		
		
//		prescriptationList.forEach((obj) -> {
//			Prescription temp = new Prescription();
//			temp.setPrescriptionId(obj.getPrescriptionId());
//			temp.setDoctor(DocRepo.findById(obj.getDoctor().getId())
//					.orElseThrow(() -> new DoctorException("Invalid Doctor ID")));
//			temp.setPatient(patRepo.findById(obj.getPatient().getPatientId())
//					.orElseThrow(() -> new PatientException("Invalid Patient ID")));
//			temp.setDiagnosis(obj.getDiagnosis().toString());
//			temp.setPrescriptionDate(obj.getPrescriptionDate());
//			temp.setPrescription(obj.getPrescription().toString());
//			list.add(temp);
//			System.out.println("temp");
//			System.out.println("list");
//		});
//		return list;
	}

	@Override
	public List<Prescription> listPrescriptionByPid(Integer pid) {
		//List<Prescription> prescriptationList = 
				return PrecRepo.findByPatientId(pid);
		
//		List<Prescription> list = new ArrayList<>();
//
//		prescriptationList.forEach((obj) -> {
//			Prescription temp = new Prescription();
//			temp.setPrescriptionId(obj.getPrescriptionId());
//			temp.setDoctor(DocRepo.findById(obj.getDoctor().getId())
//					.orElseThrow(() -> new DoctorException("Invalid Doctor ID")));
//			temp.setPatient(patRepo.findById(obj.getPatient().getPatientId())
//					.orElseThrow(() -> new PatientException("Invalid Patient ID")));
//			temp.setDiagnosis(obj.getDiagnosis().toString());
//			temp.setPrescriptionDate(obj.getPrescriptionDate());
//			temp.setPrescription(obj.getPrescription().toString());
//			list.add(temp);
//			System.out.println(temp);
//			System.out.println(list);
//		});
//		return list;
	}

	@Override
	public List<Prescription> listAllPrescriptation() {
		//List<Prescription> prescriptationList = 
				return PrecRepo.findAll();
		
	}

	@Override
	public List<Appointment> getAllAppointments() {
		// TODO Auto-generated method stub
		return appointmentRepository.findAll();
	}
	
	@Override
	public List<Appointment> getAppointment(int docId) {
		
		return appointmentRepository.getAppointmentByDoctorAndAppointmentStatus(DocRepo.findByDoctorId(docId).getDoctorId(),false);
	}

}
