package hospital.backend.requests;

import hospital.backend.models.Doctor;

public class DoctorDTO {
	
	private int id;
	private String name;
	private String specialty;
	
	public DoctorDTO() {
	}
	
	public DoctorDTO(Doctor doc) {
		this.id = doc.getId();
		this.name = doc.getName();
		this.specialty = doc.getSpecialty();
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSpecialty() {
		return specialty;
	}
	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}
	

}
