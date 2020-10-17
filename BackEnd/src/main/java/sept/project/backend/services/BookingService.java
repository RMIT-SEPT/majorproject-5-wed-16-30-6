package sept.project.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.repositories.WorkerScheduleRepository;

import java.util.Date;

@Service
public class BookingService {
    @Autowired
    private WorkerScheduleRepository workerScheduleRepository;

    public Iterable<WorkerSchedule> getAllWorkerSchedulesByBusinessId(Long id) {
        return workerScheduleRepository.findByBusinessId(id);
    }

    public WorkerSchedule getScheduleById(Long id) {
        return workerScheduleRepository.findById(id).orElse(null);
    }

    public WorkerSchedule getScheduleForWorkerAtTime(Long workedId, Date startTime, Date endTime) {
        return workerScheduleRepository.findByWorkerIdAndTimes(workedId, startTime, endTime);
    }
}
