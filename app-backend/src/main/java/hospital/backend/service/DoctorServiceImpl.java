package hospital.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hospital.backend.models.Doctor;
import hospital.backend.repo.DoctorRepo;
import hospital.backend.requests.DoctorDTO;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	@Autowired
	DoctorRepo repo;

	@Override
	public int addDoctor(DoctorDTO doctor) {
		Doctor obj = new Doctor(doctor); 
		return repo.save(obj).getId();
	}

	@Override
	public List<DoctorDTO> getDoctorByName(String name) {
		List<Doctor> doctors = repo.findAllByName(name);
		List<DoctorDTO> list = new ArrayList<>();
		for (Doctor doctor: doctors) {
			list.add(new DoctorDTO(doctor));
		}
		return list;
	}

	@Override
	public List<DoctorDTO> getDoctorBySpeciality(String speciality) {
		List<Doctor> doctors = repo.findAllBySpecialty(speciality);
		List<DoctorDTO> list = new ArrayList<>();
		for (Doctor doctor: doctors) {
			list.add(new DoctorDTO(doctor));
		}
		return list;
	}

}
