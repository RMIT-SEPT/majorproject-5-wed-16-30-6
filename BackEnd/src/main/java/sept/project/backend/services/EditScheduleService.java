package sept.project.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sept.project.backend.exceptions.PersonException;
import sept.project.backend.model.Person;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.repositories.PersonRepository;
import sept.project.backend.repositories.WorkerScheduleRepository;

@Service
public class EditScheduleService {

    @Autowired
    private WorkerScheduleRepository scheduleRepository;


    public WorkerSchedule saveOrUpdateSchedule(WorkerSchedule workerSchedule)  {

        try{
            workerSchedule.setBusinessId(workerSchedule.getBusinessId());
            return scheduleRepository.save(workerSchedule);
        }catch (Exception e){
            throw new PersonException("BusinessID '"+workerSchedule.getBusinessId()+"' already exists");
        }

    }
}
