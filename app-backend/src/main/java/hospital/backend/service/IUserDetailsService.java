package hospital.backend.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface IUserDetailsService  {

	public UserDetails loadUserByUsername(String username);
			
}
