package hospital.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hospital.backend.exceptions.InvalidAuthorityException;
import hospital.backend.models.Authorities;
import hospital.backend.models.User;
import hospital.backend.repo.AuthoritiesRepository;
import hospital.backend.repo.UserRepository;

@Service
@Transactional
public class UserDetailsServiceImpl implements IUserDetailsService, UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthoritiesRepository authRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub

		User user = userRepository.findByUsername(username);
		return user;
	}

	public List<Authorities> assignAuthority(String authority) throws InvalidAuthorityException {
		List<Authorities> auths = new ArrayList<>();
<<<<<<< HEAD
		if (authRepo.findByRoles(authority) != null) {
=======
		System.out.println("Trying to assign authority: "+ authority);
		if (authRepo.findByRole(authority) != null) {
>>>>>>> df0e266312f0e848c4859302d11efbb00f37953f
			auths.add(new Authorities(authority));
		} else {
			throw new InvalidAuthorityException();
		}
		return auths;
	}

}
