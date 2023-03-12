package hospital.backend.requests;

public class PrescriptionDto {

	private int doctorId;

	private int patientId;

	private String prescription;

	private String diagnosis;

	private String prescriptionDate;

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
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

	public String getPrescriptionDate() {
		return prescriptionDate;
	}

	public void setPrescriptionDate(String prescriptionDate) {
		this.prescriptionDate = prescriptionDate;
	}

	@Override
	public String toString() {
		return "PrescriptionDto [doctorId=" + doctorId + ", patientId=" + patientId + ", prescription=" + prescription
				+ ", diagnosis=" + diagnosis + ", prescriptionDate=" + prescriptionDate + "]";
	}

}
