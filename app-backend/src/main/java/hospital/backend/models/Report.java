package hospital.backend.models;

import java.time.LocalDate;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GeneratorType;
import org.springframework.format.annotation.DateTimeFormat;


@Entity
public class Report {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer ReportId;
	
	@Column
	private String reportName;
	
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;
	
	@Lob
	@Column(nullable = false)
	private byte[] reportDesc;
	
	@Column
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate reportIssueDate;

	public Patient getPatientId() {
		return patient;
	}

	public void setPatientId(Patient patient) {
		this.patient = patient;
	}

	public byte[] getReportDesc() {
		return reportDesc;
	}

	public void setReportDesc(byte[] reportDesc) {
		this.reportDesc = reportDesc;
	}

	public LocalDate getReportIssueDate() {
		return reportIssueDate;
	}

	public void setReportIssueDate(LocalDate reportIssueDate) {
		this.reportIssueDate = reportIssueDate;
	}
	
	

	public Integer getId() {
		return ReportId;
	}

	public void setId(Integer ReportId) {
		this.ReportId = ReportId;
	}

	

	public Report(String reportName, Patient patient, byte[] reportDesc, LocalDate reportIssueDate) {
		super();
		this.reportName = reportName;
		this.patient = patient;
		this.reportDesc = reportDesc;
		this.reportIssueDate = reportIssueDate;
	}

	public String getReportName() {
		return reportName;
	}

	public void setReportName(String reportName) {
		this.reportName = reportName;
	}

	public Report() {
		super();
	}

	@Override
	public String toString() {
		return "Report [id=" + ReportId + ", reportName=" + reportName + ", patientId=" + patient + ", reportDesc="
				+ Arrays.toString(reportDesc) + ", reportIssueDate=" + reportIssueDate + "]";
	}

	
	
	

}
