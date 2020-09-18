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
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.repositories.PersonRepository;
import sept.project.backend.repositories.WorkerScheduleRepository;
import sept.project.backend.services.EditScheduleService;
import sept.project.backend.services.Personservice;
import sept.project.backend.web.EditScheduleController;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest
public class EditScheduleTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private WorkerScheduleRepository scheduleRepository;

    /*
    Add new schedule test
     */
    @Test
    @Rollback(false)
    public void testAddNewSchedule() throws Exception{
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
        Date startDate1 = sdf.parse("2020-08-17T09:00:00Z");
        Date endDate1 = sdf.parse("2020-08-17T17:00:00Z");
        Long id1= new Long(1);
        Long businessId1= new Long(22);
        Long workerId1= new Long(1);

        WorkerSchedule schedule1 = new WorkerSchedule();
        schedule1.setBusinessId(businessId1);
        schedule1.setEndDateTime(endDate1);
        schedule1.setStartDateTime(startDate1);
        schedule1.setId(id1);
        schedule1.setWorkerId(workerId1);

        WorkerSchedule scheduleOut = scheduleRepository.save(schedule1);

        assertEquals(businessId1, scheduleOut.getBusinessId(),
                "Id is wrong");
    }

    /*
    Replace a schedule test
     */
    @Test
    @Rollback(false)
    public void testReplaceSchedule() throws Exception{
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
        Date startDate1 = sdf.parse("2020-08-17T09:00:00Z");
        Date endDate1 = sdf.parse("2020-08-17T17:00:00Z");
        Long id1= new Long(1);
        Long businessId1= new Long(22);
        Long workerId1= new Long(1);

        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
        Date startDate2 = sdf2.parse("2020-08-17T09:00:00Z");
        Date endDate2 = sdf2.parse("2020-08-17T17:00:00Z");
        Long id2= new Long(1);
        Long businessId2= new Long(22);
        Long workerId2= new Long(1);

        //Schedule 1
        WorkerSchedule schedule1 = new WorkerSchedule();
        schedule1.setBusinessId(businessId1);
        schedule1.setEndDateTime(endDate1);
        schedule1.setStartDateTime(startDate1);
        schedule1.setId(id1);
        schedule1.setWorkerId(workerId1);

        //New schedule
        WorkerSchedule schedule2 = new WorkerSchedule();
        schedule2.setBusinessId(businessId2);
        schedule2.setEndDateTime(endDate2);
        schedule2.setStartDateTime(startDate2);
        schedule2.setId(id2);
        schedule2.setWorkerId(workerId2);

        WorkerSchedule scheduleOut = scheduleRepository.save(schedule1);
        scheduleRepository.delete(scheduleOut);
        WorkerSchedule outputSched = scheduleRepository.save(schedule2);

        assertEquals(businessId2, outputSched.getBusinessId(),
                "Id is wrong");
    }
}