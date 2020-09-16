package sept.project.backend.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sept.project.backend.model.Person;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.services.BookingService;
import sept.project.backend.services.EditScheduleService;
import sept.project.backend.services.MapValidationErrorService;
import sept.project.backend.services.Personservice;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/editSchedule")
public class EditScheduleController {

    @Autowired
    private EditScheduleService scheduleService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> addNewSchedule(@Valid @RequestBody WorkerSchedule schedule, BindingResult result)  {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap;

        WorkerSchedule schedule1 = scheduleService.saveOrUpdateSchedule(schedule);
        return new ResponseEntity<WorkerSchedule>(schedule1, HttpStatus.CREATED);
    }


}
