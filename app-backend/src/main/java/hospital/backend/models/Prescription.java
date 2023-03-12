package hospital.backend.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;



@Entity
public class Prescription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer prescriptionId;
	
	@JsonIncludeProperties({ "doctorId" })
	@ManyToOne
	@JoinColumn(name = "doctor_id")
	private Doctor doctor;

	@JsonIncludeProperties({ "patientId" })
	@ManyToOne
	@JoinColumn(name = "patient_id")
	private Patient patient;

	@Column
	private String prescription;
	
	private String diagnosis;

	private LocalDate prescriptionDate;

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}

	public LocalDate getPrescriptionDate() {
		return prescriptionDate;
	}

	public void setPrescriptionDate(LocalDate prescriptionDate) {
		this.prescriptionDate = prescriptionDate;
	}
	
	
	

	public Integer getPrescriptionId() {
		return prescriptionId;
	}

	public void setPrescriptionId(Integer prescriptionId) {
		this.prescriptionId = prescriptionId;
	}



	public Prescription(Doctor doctor, Patient patient, String prescription, String diagnosis,
			LocalDate prescriptionDate) {
		super();
		this.doctor = doctor;
		this.patient = patient;
		this.prescription = prescription;
		this.diagnosis = diagnosis;
		this.prescriptionDate = prescriptionDate;
	}

	public Prescription() {
		super();
	}

	@Override
	public String toString() {
		return "Prescription [doctor=" + doctor + ", patient=" + patient + ", prescription=" + prescription
				+ ", diagnosis=" + diagnosis + ", prescriptionDate=" + prescriptionDate + "]";
	}
	
	

}
