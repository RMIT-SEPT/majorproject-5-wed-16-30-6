package sept.project.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.services.BookingService;

import java.util.List;


@RestController
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping(path = "/schedule/{businessId}")
    public ResponseEntity<?> getBusinessScheduleByBusinessId(@PathVariable("businessId") Long businessId) {
        Iterable<WorkerSchedule> workerSchedules = bookingService.getAllWorkerScheduleByBusinessId(businessId);
        return ResponseEntity.ok(workerSchedules);
    }
}
