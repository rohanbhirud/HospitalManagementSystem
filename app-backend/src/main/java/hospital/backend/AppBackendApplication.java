package hospital.backend;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import hospital.backend.models.Authorities;
import hospital.backend.models.User;
import hospital.backend.repo.AuthoritiesRepository;
import hospital.backend.repo.UserRepository;

@SpringBootApplication
public class AppBackendApplication {

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
//	
//	List<User> users = new ArrayList<>();
//	users.add(new User("user1",encoder.encode("pass1"),assignAuthority("ADMIN"),null,null,null,null,null));
//	users.add(new User("user2",encoder.encode("pass2"),assignAuthority("RECEPTIONIST"),null,null,null,null,null));
//	users.add(new User("user3",encoder.encode("pass3"),assignAuthority("DOCTOR"),null,null,null,null,null));
//	users.add(new User("user4",encoder.encode("pass4"),assignAuthority("PHARMACIST"),null,null,null,null,null));
//	users.add(new User("user5",encoder.encode("pass5"),assignAuthority("LABINCHARGE"),null,null,null,null,null));
//	users.add(new User("user6",encoder.encode("pass6"),assignAuthority("WARDINCHARGE"),null,null,null,null,null));
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
