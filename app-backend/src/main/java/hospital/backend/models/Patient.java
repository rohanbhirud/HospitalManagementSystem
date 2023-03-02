package hospital.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int patientId;

	private String patientName;
	
	private String email;
	
	private double phone;

	private char gender;
	
	private int age;

	private String address;
	
	private boolean inOutStatus;  //true if inpatient, false if outpatient

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public double getPhone() {
		return phone;
	}

	public void setPhone(double phone) {
		this.phone = phone;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Patient() {}
	
	public Patient(int patientId, String patientName, String email, double phone, char gender, int age,
			String address) {
		super();
		this.patientId = patientId;
		this.patientName = patientName;
		this.email = email;
		this.phone = phone;
		this.gender = gender;
		this.age = age;
		this.address = address;
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", patientName=" + patientName + ", email=" + email + ", phone="
				+ phone + ", gender=" + gender + ", age=" + age + ", address=" + address + "]";
	}
	
	
}
