package hospital.backend.service;

import java.util.List;

import hospital.backend.requests.DoctorDTO;

public interface DoctorService {
	public int addDoctor(DoctorDTO doctor);
	public List<DoctorDTO> getDoctorByName(String name);
	public List<DoctorDTO> getDoctorBySpeciality(String speciality);
}
