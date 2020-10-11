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
import sept.project.backend.services.Personservice;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private Personservice personservice;

    @Autowired
    private EditScheduleService editScheduleService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @GetMapping(path = "/schedule/{businessId}")
    public ResponseEntity<?> getBusinessScheduleByBusinessId(@PathVariable("businessId") Long businessId) {
        Iterable<WorkerSchedule> workerSchedules = bookingService.getAllWorkerSchedulesByBusinessId(businessId);

        WorkerScheduleResult result = new WorkerScheduleResult();

        result.schedules = workerSchedules;

        ArrayList<Person> workers = new ArrayList<Person>();
        for (WorkerSchedule s : result.schedules) {
            Person worker = personservice.findById(s.getWorkerId());
            if (worker != null && !workers.contains(worker)) {
                workers.add(worker);
            }
        }

        result.workers = workers;
        return ResponseEntity.ok(result);
    }

    @PostMapping("")
    @ResponseBody
    public void editSchedule(@RequestBody BookingForm bookingForm)  {
        Long scheduleId = bookingForm.getId();

        WorkerSchedule schedule = bookingService.getScheduleById(scheduleId);

        Long workerId = bookingForm.getWorker_id();

        if (schedule.getWorkerId() != workerId) {
            schedule = bookingService.getScheduleForWorkerAtTime(workerId, schedule.getStartDateTime(), schedule.getEndDateTime());
        }

        Long custId = bookingForm.getCust_id();

        editScheduleService.editSchedule(schedule.getId(), custId);
    }
}

