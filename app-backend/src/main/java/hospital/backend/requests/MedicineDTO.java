package hospital.backend.requests;

public class MedicineDTO {
	
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

	public MedicineDTO() {}
	
	public MedicineDTO(String medicineName, float price, int qty) {
		super();
		this.medicineName = medicineName;
		this.price = price;
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "MedicineStore [medicineName=" + medicineName + ", price=" + price
				+ ", qty=" + qty + "]";
	}
	
	
}


