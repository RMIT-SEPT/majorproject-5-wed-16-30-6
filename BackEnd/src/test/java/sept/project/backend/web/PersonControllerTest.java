package sept.project.backend.web;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import sept.project.backend.model.Person;
import sept.project.backend.services.Personservice;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;


@SpringBootTest
@RunWith(SpringRunner.class)
public class PersonControllerTest {
    MockMvc mockMvc;

    @Autowired
    PersonController personController;

    @MockBean
    Personservice personservice;

    private List<Person> personList;
    private List<Person> emptyPersonList = new ArrayList<>();

    @BeforeEach
    public void setup() throws Exception {
        this.mockMvc = standaloneSetup(this.personController).build();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
        //sdf.setTimeZone(TimeZone.getTimeZone("UTC+10"));
        Date createDate1 = sdf.parse("2020-08-17T09:00:00Z");
        Date createDate2 = sdf.parse("2020-08-18T010:00:00Z");
        Long testBusinessId = 1L;

        // two worker schedules of two different workers of the same business (business id 1)
        Person p1 = new Person();
            Long id1 = new Long(1);
            p1.setId(id1);
            p1.setName("John");
            p1.setPersonIdentifier("a111");
            p1.setDesc("New Worker");
            p1.setMobileNum("0492838485");
            p1.setCreated_At(createDate1);
            p1.setRole("w");

        Person p2 = new Person();
            Long id2 = new Long(2);
            p2.setId(id2);
            p2.setName("George");
            p2.setPersonIdentifier("b111");
            p2.setDesc("New Admin");
            p2.setMobileNum("0482818284");
            p2.setCreated_At(createDate2);
            p2.setRole("w");

        personList = new ArrayList<>();
        personList.add(p1);
        personList.add(p2);
    }


}
