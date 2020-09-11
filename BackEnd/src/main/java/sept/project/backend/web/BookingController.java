package sept.project.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.services.BookingService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping(path = "/schedule/{businessId}")
    public ResponseEntity<?> getBusinessScheduleByBusinessId(@PathVariable("businessId") Long businessId) {
        Iterable<WorkerSchedule> workerSchedules = bookingService.getAllWorkerSchedulesByBusinessId(businessId);
        return ResponseEntity.ok(workerSchedules);
    }
}
