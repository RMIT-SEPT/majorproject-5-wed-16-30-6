package sept.project.backend.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import sept.project.backend.model.LoginForm;
import sept.project.backend.model.Person;
import sept.project.backend.services.MapValidationErrorService;
import sept.project.backend.services.Personservice;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private Personservice personService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    @ResponseBody
    public ResponseEntity<?> login(@RequestBody LoginForm loginForm)  {
        String personId = loginForm.getUsername();
        String password = loginForm.getPassword();

        Person person = personService.findByPersonIdentifier(personId);
        String passwordTru = person.getPassword();

        if(passwordTru.equals(password)){
            return new ResponseEntity<Person>(person, HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("Wrong credentials mate", HttpStatus.OK);
        }
    }
}
