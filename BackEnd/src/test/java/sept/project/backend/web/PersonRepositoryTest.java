package sept.project.backend.web;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import sept.project.backend.model.Person;
import sept.project.backend.repositories.PersonRepository;
import sept.project.backend.services.Personservice;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest
public class PersonRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private PersonRepository personRepository;


    /*
    Test to check getName
     */
    @Test
    @Rollback(false)
    public void testGetNewPerson() {
        Long id1= new Long(1);
        Person person1 = new Person();
        person1.setRole("w");
        person1.setMobileNum("0402821822");
        person1.setDesc("New Worker");
        person1.setUsername("AAAA");
        person1.setName("John");
        person1.setId(id1);

        Person personIn = personRepository.save(person1);

        assertEquals("John", personIn.getName(),
                "Name must be John");
    }

    /*
    Test find person by Identifier
     */
    @Test
    @Rollback(false)
    public void TestRegisterPerson() {
        Person person2 = new Person();
        person2.setRole("c");
        person2.setMobileNum("0402815583");
        person2.setDesc("New Customer");
        person2.setUsername("BBBB");
        person2.setName("Jay");

        personRepository.save(person2);

        Person newGuy2 = personRepository.findByPersonIdentifier("BBBB");
        assertThat(newGuy2.getId()).isGreaterThan(0);
    }

    /*
    Test to check the findAll method in repository
     */
    @Test
    @Rollback(false)
    public void TestFindAll() {
        Person person4 = new Person();
        person4.setRole("w");
        person4.setMobileNum("0402844773");
        person4.setDesc("New Worker");
        person4.setUsername("DDDD");
        person4.setName("Jim");

        personRepository.save(person4);

        Iterable<Person> newGuys = personRepository.findAll();
        assertThat(newGuys.iterator().next().getName().equals("Jim"));

    }

}