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
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.services.BookingService;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
class BookingControllerTest {
    MockMvc mockMvc;

    @Autowired
    BookingController bookingController;

    @MockBean
    BookingService bookingService;

    /**
     * worker schedules mock
     */
    private List<WorkerSchedule> workerSchedules;

    @BeforeEach
    public void setup() throws Exception {
        this.mockMvc = standaloneSetup(this.bookingController).build();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
        //sdf.setTimeZone(TimeZone.getTimeZone("UTC+10"));
        Date startDate1 = sdf.parse("2020-08-17T09:00:00Z");
        Date endDate1 = sdf.parse("2020-08-17T17:00:00Z");
        Date startDate2 = sdf.parse("2020-08-18T010:00:00Z");
        Date endDate2 = sdf.parse("2020-08-18T15:00:00Z");

        // two worker schedules of two different workers of the same business
        WorkerSchedule ws1 = WorkerSchedule.builder()
                .id(1L)
                .businessId(1L)
                .workerId(1L)
                .startDateTime(startDate1)
                .endDateTime(endDate1)
                .build();
        WorkerSchedule ws2 = WorkerSchedule.builder()
                .id(2L)
                .businessId(1L)
                .workerId(2L)
                .startDateTime(startDate2)
                .endDateTime(endDate2)
                .build();

        workerSchedules = new ArrayList<>();
        workerSchedules.add(ws1);
        workerSchedules.add(ws2);
    }

    @Test
    void getBusinessScheduleByBusinessIdTest1() throws Exception {
        // Mocking service
        when(bookingService.getAllWorkerSchedulesByBusinessId(any(Long.class))).thenReturn(workerSchedules);
        mockMvc.perform(get("/api/booking/schedule/1").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].businessId", is(1)))
                .andExpect(jsonPath("$[0].workerId", is(1)))
                .andExpect(jsonPath("$[0].startDateTime", is("2020-08-17T09:00:00Z")))
                .andExpect(jsonPath("$[0].endDateTime", is("2020-08-17T17:00:00Z")));
    }

    @Test
    void getBusinessScheduleByBusinessIdTest2() throws Exception {
        // Mocking service
        when(bookingService.getAllWorkerSchedulesByBusinessId(any(Long.class))).thenReturn(workerSchedules);
        mockMvc.perform(get("/api/booking/schedule/1").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[1].businessId", is(1)))
                .andExpect(jsonPath("$[1].workerId", is(2)))
                .andExpect(jsonPath("$[1].startDateTime", is("2020-08-18T10:00:00Z")))
                .andExpect(jsonPath("$[1].endDateTime", is("2020-08-18T15:00:00Z")));
    }
}