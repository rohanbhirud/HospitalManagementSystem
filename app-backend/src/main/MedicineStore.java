package hospital.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MedicineStore {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int medicineId;
	
	private String medicineName;
	
	private float price;
	
	private int qty;

	public int getMedicineId() {
		return medicineId;
	}

	public void setMedicineId(int medicineId) {
		this.medicineId = medicineId;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public MedicineStore() {}
	
	public MedicineStore(int medicineId, String medicineName, float price, int qty) {
		super();
		this.medicineId = medicineId;
		this.medicineName = medicineName;
		this.price = price;
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "MedicineStore [medicineId=" + medicineId + ", medicineName=" + medicineName + ", price=" + price
				+ ", qty=" + qty + "]";
	}
	
	
}
