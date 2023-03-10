package hospital.backend.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import hospital.backend.exceptions.PatientHandlingException;
import hospital.backend.models.Patient;
import hospital.backend.models.Report;
import hospital.backend.repo.PatientRepository;
import hospital.backend.repo.ReportRepository;

@Service
public class ReportServiceImpl implements IReportService{
	
	
	@Autowired
	private ReportRepository reportRepo;
	
	@Autowired
	private PatientRepository patientRepo;
	
	@Override
	public Stream<Report> getAllReports() {
		return reportRepo.findAll().stream();
	}
	@Override
	public List<Report> getAllReportsByPatientId(Integer patientId) {
		return reportRepo.findByPatientId(patientRepo.findById(patientId).get());
	}
	@Override
	public Report getReport(Integer id) {
		return reportRepo.findById(id).get();
	}
	@Override
	public Report storeReport(String reportName,MultipartFile file, Integer patientId, LocalDate report_issue_date)
			throws IOException {
		Patient patient=patientRepo.findById(patientId).orElseThrow(()->new PatientHandlingException("Invalid Patient ID"));
		Report newReport=new Report(reportName, patient, file.getBytes(), report_issue_date);
		return reportRepo.save(newReport);
	}

}
