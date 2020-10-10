package sept.project.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sept.project.backend.exceptions.PersonException;
import sept.project.backend.model.Person;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.repositories.PersonRepository;
import sept.project.backend.repositories.WorkerScheduleRepository;

import java.util.Optional;

@Service
public class EditScheduleService {

    @Autowired
    private WorkerScheduleRepository scheduleRepository;

    public void editSchedule(Long id, Long custId){
        scheduleRepository.updateSchedule(custId, id);
    }

    public WorkerSchedule saveOrUpdateSchedule(WorkerSchedule workerSchedule)  {

        try{
            workerSchedule.setBusinessId(workerSchedule.getBusinessId());
            return scheduleRepository.save(workerSchedule);
        }catch (Exception e){
            throw new PersonException("BusinessID '"+workerSchedule.getBusinessId()+"' already exists");
        }

    }

    public void deleteScheduleByIdentifier(Long Id)  {
        WorkerSchedule schedule = scheduleRepository.findByIdentifier(Id);

        if(schedule == null){
            throw  new  PersonException("Cannot find Schedule with ID '"+Id+"'. This schedule does not exist");
        }

        scheduleRepository.delete(schedule);
    }
}