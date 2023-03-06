package hospital.backend.requests;

public class PasswordChangeRequest {

	private String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public PasswordChangeRequest(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	public PasswordChangeRequest() {}
	@Override
	public String toString() {
		return "PasswordChangeRequest [username=" + username + ", password=" + password + "]";
	}
	
	
}
