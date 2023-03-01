package hospital.backend.models;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int appointmentId;
	
	private LocalDate date;
	
	private LocalTime time;
	
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;
	
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

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public boolean isAppointmentStatus() {
		return appointmentStatus;
	}

	public void setAppointmentStatus(boolean appointmentStatus) {
		this.appointmentStatus = appointmentStatus;
	}

	public Appointment() {}
	public Appointment(int appointmentId, LocalDate date, LocalTime time, Patient patient, boolean appointmentStatus) {
		super();
		this.appointmentId = appointmentId;
		this.date = date;
		this.time = time;
		this.patient = patient;
		this.appointmentStatus = appointmentStatus;
	}

	@Override
	public String toString() {
		return "Appointment [appointmentId=" + appointmentId + ", date=" + date + ", time=" + time + ", patient="
				+ patient + ", appointmentStatus=" + appointmentStatus + "]";
	}
	
	
}
