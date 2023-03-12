package hospital.backend.requests;

import java.time.LocalDate;
import java.time.LocalTime;

import hospital.backend.models.Patient;

public class AppointmentDTO {

	private int appointmentId;

	private LocalDate date;

	private LocalTime time;

	private int patientId;
	
	private int doctorId;

	private boolean appointmentStatus;

	public int getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patient) {
		this.patientId = patient;
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public boolean isAppointmentStatus() {
		return appointmentStatus;
	}

	public void setAppointmentStatus(boolean appointmentStatus) {
		this.appointmentStatus = appointmentStatus;
	}
	
	public AppointmentDTO() {}

	public AppointmentDTO(int appointmentId, LocalDate date, LocalTime time, int patient, int doctorId,
			boolean appointmentStatus) {
		super();
		this.appointmentId = appointmentId;
		this.date = date;
		this.time = time;
		this.patientId = patient;
		this.doctorId = doctorId;
		this.appointmentStatus = appointmentStatus;
	}
	

}
