package hospital.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LabTest {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int testId;
	
	private String testName;
	
	private float charges;

	public int getTestId() {
		return testId;
	}

	public void setTestId(int testId) {
		this.testId = testId;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public float getCharges() {
		return charges;
	}

	public void setCharges(float charges) {
		this.charges = charges;
	}

	public LabTest() {}
	
	public LabTest(int testId, String testName, float charges) {
		super();
		this.testId = testId;
		this.testName = testName;
		this.charges = charges;
	}

	@Override
	public String toString() {
		return "LabTest [testId=" + testId + ", testName=" + testName + ", charges=" + charges + "]";
	}
	
	
}
