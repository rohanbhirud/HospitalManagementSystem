package hospital.backend.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Doctor {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int DoctorId;
	
	@Column()
	private String name;
	
	@Column
	private String specialty;
	
	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true, fetch = FetchType.LAZY)
	@JsonIgnore
	List<Appointment> appointmentList=new ArrayList<>();
	
	@JsonProperty
	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	List<Prescription> prescriptionList=new ArrayList<>();

	
	public Doctor() {}
	
	

	public Doctor(String name, String specialty, List<Appointment> appointmentList,
			List<Prescription> prescriptionList) {
		super();
		this.name = name;
		this.specialty = specialty;
		this.appointmentList = appointmentList;
		this.prescriptionList = prescriptionList;
	}



	public int getId() {
		return DoctorId;
	}

	public void setId(int id) {
		this.DoctorId = id;
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
		return "Doctor [id=" + DoctorId + ", name=" + name + ", specialty=" + specialty + "]";
	}
	
}
