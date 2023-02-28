package hospital.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospital.backend.models.Authorities;

@Repository
public interface AuthoritiesRepository extends JpaRepository<Authorities, String>{

	Authorities findByRole(String role);
	
}
