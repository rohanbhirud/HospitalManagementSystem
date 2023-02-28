package hospital.backend.responses;

public class UserInfo {
	
	private String username;
	private Object roles;


	public String getUserName() {
		return username;
	}

	public void setUserName(String userName) {
		this.username = userName;
	}

	public Object getRoles() {
		return roles;
	}

	public void setRoles(Object roles) {
		this.roles = roles;
	}
	
	
}
