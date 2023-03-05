package hospital.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import hospital.backend.requests.DoctorDTO;

@Entity
public class Doctor {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column()
	private String name;
	
	@Column
	private String specialty;
	
	public Doctor() {}
	
	public Doctor(DoctorDTO doc) {
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

	@Override
	public String toString() {
		return "Doctor [id=" + id + ", name=" + name + ", specialty=" + specialty + "]";
	}
	
}
