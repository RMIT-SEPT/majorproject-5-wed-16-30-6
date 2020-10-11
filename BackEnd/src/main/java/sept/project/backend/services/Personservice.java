package sept.project.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sept.project.backend.exceptions.PersonException;
import sept.project.backend.model.Person;
import sept.project.backend.repositories.PersonRepository;

import java.util.List;


@Service
public class Personservice {
    @Autowired
    private PersonRepository personRepository;


    public Person saveOrUpdatePerson(Person person)  {

        try{
            person.setUsername(person.getUsername().toUpperCase());
            return personRepository.save(person);
        }catch (Exception e){
            throw new PersonException("Username '"+person.getUsername().toUpperCase()+"' already exists");
        }

    }


    public Person findByPersonIdentifier(String personId)  {

        Person person = personRepository.findByPersonIdentifier(personId.toUpperCase());

        if(person == null){
            throw new PersonException("Username '"+personId+"' does not exist");

        }


        return person;
    }

    public Person findById(Long id)  {
        Person person = personRepository.findById(id).orElse(null);

        if(person == null){
            throw new PersonException(id + " does not exist");
        }

        return person;
    }

    public Iterable<Person> findAllPersons(){
        return personRepository.findAll();
    }


    public void deletePersonByIdentifier(String personId)  {
        Person person = personRepository.findByPersonIdentifier(personId.toUpperCase());

        if(person == null){
            throw  new  PersonException("Cannot Delete Person with Username '"+personId+"'. This person does not exist");
        }

        personRepository.delete(person);
    }
}
