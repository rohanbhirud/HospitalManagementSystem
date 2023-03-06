package hospital.backend.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import hospital.backend.models.Report;


@Service
public interface IReportService {
	
	Stream<Report> getAllReports();
	Report storeReport(String reportName,MultipartFile file,Integer patientId,LocalDate report_issue_date) throws IOException;
	
	List<Report> getAllReportsByPatientId(Integer patientId);

	Report getReport(Integer id);

}
