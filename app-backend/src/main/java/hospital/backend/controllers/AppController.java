package hospital.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.models.User;
import hospital.backend.repo.UserRepository;

@RestController
@RequestMapping("/")
@CrossOrigin
public class AppController {

	@Autowired
	UserRepository userRepo;
	
	@GetMapping
	public String hello() {
		return "Hello World";
	}
	
}
