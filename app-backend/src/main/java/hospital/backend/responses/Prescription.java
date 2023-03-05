package hospital.backend.responses;

import java.util.List;

public class Prescription {
	
	private List<String> medicines;
	private List<String> labTest;
	
	public List<String> getMedicines() {
		return medicines;
	}
	public void setMedicines(List<String> medicines) {
		this.medicines = medicines;
	}
	public List<String> getLabTest() {
		return labTest;
	}
	public void setLabTest(List<String> labTest) {
		this.labTest = labTest;
	}
	
	
	
}
