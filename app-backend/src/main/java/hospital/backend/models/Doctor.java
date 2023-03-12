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
	private Integer doctorId;
	
	@Column
	private String name;
	
	
	
	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true, fetch = FetchType.LAZY)
	@JsonIgnore
	List<Appointment> appointmentList=new ArrayList<>();
	
	@JsonProperty
	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	List<Prescription> prescriptionList=new ArrayList<>();

	
	public Doctor() {}
	
	

	public Doctor(String name, List<Appointment> appointmentList,
			List<Prescription> prescriptionList) {
		super();
		this.name = name;
		this.appointmentList = appointmentList;
		this.prescriptionList = prescriptionList;
	}



	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int id) {
		this.doctorId = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	@Override
	public String toString() {
		return "Doctor [DoctorId=" + doctorId + ", name=" + name + " ]";
	}
	
}
