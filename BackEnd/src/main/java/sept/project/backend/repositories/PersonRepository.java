package sept.project.backend.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import sept.project.backend.model.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {
    @Query("SELECT s FROM Person s WHERE s.username = ?1")
    Person findByPersonIdentifier(String personIdentifier);

    @Override
    Iterable<Person> findAll();
}
