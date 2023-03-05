package hospital.backend;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import hospital.backend.models.Authorities;
import hospital.backend.models.Patient;
import hospital.backend.models.User;
import hospital.backend.repo.AuthoritiesRepository;
import hospital.backend.repo.PatientRepository;
import hospital.backend.repo.UserRepository;

@SpringBootApplication
public class AppBackendApplication {
	
//	@Autowired
//	PatientRepository patientRepo;
//		
//	@Autowired
//	UserRepository userRepo;
//	
//	@Autowired
//	PasswordEncoder encoder;
//	
//	@Autowired
//	AuthoritiesRepository authRepo;
//	
//	@PostConstruct               //dummy data
//	protected void init() throws Exception {
//	List<Authorities> authorityList = new ArrayList<>();
//	authorityList.add(new Authorities("ADMIN"));
//	authorityList.add(new Authorities("RECEPTIONIST"));
//	authorityList.add(new Authorities("DOCTOR"));
//	authorityList.add(new Authorities("PHARMACIST"));
//	authorityList.add(new Authorities("LABINCHARGE"));
//	authorityList.add(new Authorities("WARDINCHARGE"));
//	authRepo.saveAll(authorityList);
//	List<Patient> patients = new ArrayList<>();
//	patients.add(new Patient(1,"patient1","patient1@mail.com",12345,'M',21,"city1",true));
//	patients.add(new Patient(2,"patient2","patient2@mail.com",23451,'F',22,"city2",false));
//	patients.add(new Patient(3,"patient3","patient3@mail.com",34512,'M',23,"city3",true));
//	patients.add(new Patient(4,"patient4","patient4@mail.com",45123,'F',24,"city4",false));
//	patients.add(new Patient(5,"patient5","patient5@mail.com",51234,'M',25,"city5",true));
//	
//	patientRepo.saveAll(patients);
//	
//	List<User> users = new ArrayList<>();
//	users.add(new User("user1",encoder.encode("pass1"),assignAuthority("ADMIN"),"","","",0,""));
//	users.add(new User("user2",encoder.encode("pass2"),assignAuthority("RECEPTIONIST"),"","","",0,""));
//	users.add(new User("user3",encoder.encode("pass3"),assignAuthority("DOCTOR"),"","","",0,""));
//	users.add(new User("user4",encoder.encode("pass4"),assignAuthority("PHARMACIST"),"","","",0,""));
//	users.add(new User("user5",encoder.encode("pass5"),assignAuthority("LABINCHARGE"),"","","",0,""));
//	users.add(new User("user6",encoder.encode("pass6"),assignAuthority("WARDINCHARGE"),"","","",0,""));
//	
//	userRepo.saveAll(users);
//	}
//	
//	public List<Authorities> assignAuthority(String authority) throws Exception{
//		List<Authorities> auths = new ArrayList<>();
//		if(authRepo.findByRole(authority)!=null) {
//			auths.add(new Authorities(authority));
//		}else {
//			throw new Exception("Authority Invalid");
//		}
//		return auths;
//	}
	
	public static void main(String[] args) {
		SpringApplication.run(AppBackendApplication.class, args);
	}

}
