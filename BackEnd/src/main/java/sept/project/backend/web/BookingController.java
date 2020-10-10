package sept.project.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sept.project.backend.model.BookingForm;
import sept.project.backend.model.LoginForm;
import sept.project.backend.model.Person;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.services.BookingService;
import sept.project.backend.services.EditScheduleService;
import sept.project.backend.services.MapValidationErrorService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private EditScheduleService editScheduleService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @GetMapping(path = "/schedule/{businessId}")
    public ResponseEntity<?> getBusinessScheduleByBusinessId(@PathVariable("businessId") Long businessId) {
        Iterable<WorkerSchedule> workerSchedules = bookingService.getAllWorkerSchedulesByBusinessId(businessId);
        return ResponseEntity.ok(workerSchedules);
    }

    @PostMapping("")
    @ResponseBody
    public void editSchedule(@RequestBody BookingForm bookingForm)  {
        Long scheduleId = bookingForm.getId();
        Long workerId = bookingForm.getWorker_id();
        Long custId = bookingForm.getCust_id();

        editScheduleService.editSchedule(scheduleId, custId);
    }

}
