package hospital.backend.filehandling;

import java.time.LocalDate;

public class ResponseFile {
	
	 private Integer SrNo;
	  private String url;
	  private Integer reportId;
	  private Integer patientId;
	  private String reportName;
	  private long size;
	  private LocalDate reportIssueDate;

	public ResponseFile(Integer srNo,String reportName,LocalDate reportIssueDate, String url, Integer reportId, Integer patientId, long size) {
		super();
		SrNo = srNo;
		this.url = url;
		this.reportId = reportId;
		this.patientId = patientId;
		this.size = size;
		this.reportName=reportName;
		this.reportIssueDate=reportIssueDate;
	}

	public Integer getSrNo() {
		return SrNo;
	}

	public void setSrNo(Integer srNo) {
		SrNo = srNo;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Integer getReportId() {
		return reportId;
	}

	public void setReportId(Integer reportId) {
		this.reportId = reportId;
	}

	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

	public long getSize() {
		return size;
	}

	public void setSize(long size) {
		this.size = size;
	}

	public String getReportName() {
		return reportName;
	}

	public void setReportName(String reportName) {
		this.reportName = reportName;
	}

	public LocalDate getReportIssueDate() {
		return reportIssueDate;
	}

	public void setReportIssueDate(LocalDate reportIssueDate) {
		this.reportIssueDate = reportIssueDate;
	}


}
