package hospital.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hospital.backend.exceptions.InvalidAuthorityException;
import hospital.backend.exceptions.UserNotFoundException;
import hospital.backend.models.User;
import hospital.backend.repo.UserRepository;
import hospital.backend.requests.PasswordChangeRequest;
import hospital.backend.requests.UserDTO;
import hospital.backend.service.IUserDetailsService;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {

	@Autowired
	private IUserDetailsService userDetailsService;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private PasswordEncoder passEncoder;

	@GetMapping
	public User getUser(@RequestParam String username) {

		return userRepo.findByUsername(username);

	}

	@PostMapping
	public void createUser(@RequestBody UserDTO newuser) throws InvalidAuthorityException {

		userRepo.save(new User(newuser.getUsername(), "NA",
				userDetailsService.assignAuthority(newuser.getAuthority()), newuser.getFirstname(),
				newuser.getLastname(), newuser.getEmail(), newuser.getAge(), newuser.getAddress()));

	}

	@DeleteMapping
	public void deleteUser(@RequestBody String username) throws Exception {
		User userToDelete = userRepo.findByUsername(username);
		if (userToDelete != null) {
			userRepo.delete(userToDelete);
		} else {
			throw new Exception("User deletion failed");
		}
	}

	@PutMapping
	public void updateUser(@RequestBody UserDTO updatedUser) throws Exception {

		User userToUpdate = userRepo.findByUsername(updatedUser.getUsername());
		if (userToUpdate != null) {
			userToUpdate.setAuthorities(userDetailsService.assignAuthority(updatedUser.getAuthority()));
			userToUpdate.setFirstname(updatedUser.getFirstname());
			userToUpdate.setLastname(updatedUser.getLastname());
			userToUpdate.setEmail(updatedUser.getEmail());
			userToUpdate.setAge(updatedUser.getAge());
			userToUpdate.setAddress(updatedUser.getAddress());
			userRepo.save(userToUpdate);

		} else {
			throw new Exception("User updation failed");
		}

	}

	@GetMapping("/all")
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@PostMapping("/changepass")
	public ResponseEntity<String> changePassword(@RequestBody PasswordChangeRequest changePass) {
		User userToUpdate = userRepo.findByUsername(changePass.getUsername());
		userToUpdate.setPassword(passEncoder.encode(changePass.getPassword()));
		userRepo.save(userToUpdate);
		return ResponseEntity.ok("Password Changed");
	}
}
