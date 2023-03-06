package hospital.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;

@Entity
public class Authorities implements GrantedAuthority {

	@Id
	@Column(length=20)
	private String roles;
	
	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return roles;
	}

	public void setAuthority(String role) {
		this.roles = role;
	}

	public Authorities() {}
			
	public Authorities(String role) {
		super();
		this.roles = role;
	}

}
