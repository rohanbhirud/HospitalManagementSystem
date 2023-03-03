package hospital.backend.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import hospital.backend.exceptions.InvalidAuthorityException;
import hospital.backend.models.Authorities;

public interface IUserDetailsService  {

	public UserDetails loadUserByUsername(String username);
	
	public List<Authorities> assignAuthority(String authority) throws InvalidAuthorityException;
			
}
