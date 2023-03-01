package hospital.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.models.User;
import hospital.backend.repo.UserRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class UserController {

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private UserRepository userRepo;
	
	
	
}
