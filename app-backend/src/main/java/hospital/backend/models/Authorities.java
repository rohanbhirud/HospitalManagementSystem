package hospital.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;

@Entity
public class Authorities implements GrantedAuthority {

	@Id
	@Column(length=20)
	private String role;
	
	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return role;
	}

	public void setAuthority(String role) {
		this.role = role;
	}

	public Authorities() {}
			
	public Authorities(String role) {
		super();
		this.role = role;
	}

}
