//package sept.project.backend.web;
//import static org.assertj.core.api.Assertions.assertThat;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.annotation.Rollback;
//import sept.project.backend.model.LoginForm;
//import sept.project.backend.model.Person;
//import sept.project.backend.model.WorkerSchedule;
//import sept.project.backend.repositories.PersonRepository;
//import sept.project.backend.repositories.WorkerScheduleRepository;
//import sept.project.backend.services.Personservice;
//
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Date;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//public class ChooseTimeSlotTest_US4 {
//    @Autowired
//    private WorkerScheduleRepository scheduleRepository;
//
//    @Test
//    @Rollback(false)
//    public void testChooseTimeSlotRegister() {
//        Long id = new Long(5);
//        Long businessId = new Long(2);
//        Long workerId = new Long(2);
//
//        WorkerSchedule schedular = new WorkerSchedule();
//        schedular.setId(id);
//        schedular.setBusinessId(businessId);
//        schedular.setWorkerId(workerId);
//        schedular.setBooked(false);
//
//        WorkerSchedule schedule2 = scheduleRepository.save(schedular);
//
//        Long custId = new Long(200);
//        Long idnew = new Long(5);
//
//        scheduleRepository.updateSchedule(custId, idnew);
//
//        Boolean outputTest = scheduleRepository.findByIdentifier(id).getBooked();
//
//        assertEquals(true, outputTest,
//                "Test passed because the booked is now true");
//    }
//
//
//
//}
