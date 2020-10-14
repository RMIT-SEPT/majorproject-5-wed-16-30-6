package sept.project.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import sept.project.backend.model.Person;
import sept.project.backend.services.MapValidationErrorService;
import sept.project.backend.services.Personservice;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:1337")
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private Personservice personService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("")
    public ResponseEntity<?> createNewPerson(@Valid @RequestBody Person person, BindingResult result)  {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap;

        Person project1 = personService.saveOrUpdatePerson(person);
        return new ResponseEntity<Person>(project1, HttpStatus.CREATED);
    }


    @GetMapping("/{personId}")
    public ResponseEntity<?> getPersonById(@PathVariable String personId


    ){

        Person person = personService.findByPersonIdentifier(personId);

        return new ResponseEntity<Person>(person, HttpStatus.OK);
    }


    @GetMapping("/all")
    public Iterable<Person> getAllPersons(){return

            personService.findAllPersons();}


    @DeleteMapping("/{personId}")
    public ResponseEntity<?> deleteProject(@PathVariable String personId)  {
        personService.deletePersonByIdentifier(personId);

        return new ResponseEntity<String>("Person with ID: '"+personId+"' was deleted", HttpStatus.OK);
    }
}
// final Person Controller