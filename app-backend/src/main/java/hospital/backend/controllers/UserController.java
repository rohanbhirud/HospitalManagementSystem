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
import hospital.backend.models.Doctor;
import hospital.backend.models.User;
import hospital.backend.repo.DoctorRepo;
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
	
	@Autowired
	private DoctorRepo doctorRepo;

	@GetMapping
	public User getUser(@RequestParam String username) {

		return userRepo.findByUsername(username);

	}

	@PostMapping
	public void createUser(@RequestBody UserDTO newuser) throws InvalidAuthorityException {

		User userToCreate = new User();

		userToCreate.setUsername(newuser.getUsername());
		userToCreate.setPassword(passEncoder.encode(newuser.getPassword()));
		userToCreate.setAuthorities(userDetailsService.assignAuthority(newuser.getAuthority()));
		userToCreate.setFirstname(newuser.getFirstname());
		userToCreate.setLastname(newuser.getLastname());
		userToCreate.setEmail(newuser.getEmail());
		userToCreate.setAge(newuser.getAge());
		userToCreate.setAddress(newuser.getAddress());
		User u=userRepo.save(userToCreate);
		if(newuser.getAuthority().equals("DOCTOR"))
		{
			Doctor d1=new Doctor();
			d1.setDoctorId(u.getUserId());
			d1.setName(u.getFirstname());
			doctorRepo.save(d1);
		}

	}

	@DeleteMapping
	public void deleteUser(@RequestBody String username) throws Exception {
		User userToDelete = userRepo.findByUsername(username);
		if (userToDelete != null) {
			userRepo.delete(userToDelete);
			if(userToDelete.getAuthorities().equals("DOCTOR")) {
				doctorRepo.delete(doctorRepo.getById(userToDelete.getUserId()));
			}
		} 
		
		else {
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
			if(userToUpdate.getAuthorities().equals("DOCTOR")) {
				Doctor doc=doctorRepo.getById(Integer.parseInt(updatedUser.getUserId()));
				if(doc != null) {
					doc.setName(updatedUser.getFirstname());
					doctorRepo.save(doc);
				}
			}

		}
		
		else {
			throw new Exception("User updation failed");
		}

	}

	@PutMapping("/profile")
	public void updateProfile(@RequestBody UserDTO updatedUser) throws Exception {

		User userToUpdate = userRepo.findByUsername(updatedUser.getUsername());
		if (userToUpdate != null) {
			userToUpdate.setFirstname(updatedUser.getFirstname());
			userToUpdate.setLastname(updatedUser.getLastname());
			userToUpdate.setEmail(updatedUser.getEmail());
			userToUpdate.setAge(updatedUser.getAge());
			userToUpdate.setAddress(updatedUser.getAddress());
			userRepo.save(userToUpdate);

		} else {
			throw new Exception("Profile updation failed");
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
