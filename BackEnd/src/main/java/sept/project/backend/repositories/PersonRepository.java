package sept.project.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import sept.project.backend.model.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {

    Person findByPersonIdentifier(String personId);
    @Override
    Iterable<Person> findAll();
}
