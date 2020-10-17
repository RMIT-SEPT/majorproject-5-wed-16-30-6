package sept.project.backend.web;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Rollback;
import sept.project.backend.model.LoginForm;
import sept.project.backend.model.Person;
import sept.project.backend.repositories.PersonRepository;
import sept.project.backend.services.Personservice;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LoginTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private Personservice personservice;

    @Autowired
    private LoginController loginController;

    @Test
    @Rollback(false)
    public void testLogin() {
        Long id1= new Long(1);
        Person person1 = new Person();
        person1.setRole("w");
        person1.setMobileNum("0402821822");
        person1.setDesc("New Worker");
        person1.setUsername("AAAA");
        person1.setPassword("asda");
        person1.setName("John");
        person1.setId(id1);
        person1.setAddress("ababa");

        LoginForm loginForm = new LoginForm();
        loginForm.setUsername("AAAA");
        loginForm.setPassword("basda");

        Person personIn = personRepository.save(person1);

        ResponseEntity<?> testOut = loginController.login(loginForm);

        assertEquals("Wrong credentials mate", testOut,
                "Test passed cause password is wrong");
    }



}
