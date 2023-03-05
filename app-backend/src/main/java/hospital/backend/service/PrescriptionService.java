package hospital.backend.service;

import hospital.backend.responses.Prescription;

public interface PrescriptionService {

	public Prescription getPrescription(String disease);
}
