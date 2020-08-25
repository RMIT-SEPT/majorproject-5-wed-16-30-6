package sept.project.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sept.project.backend.model.WorkerSchedule;
import sept.project.backend.repositories.WorkerScheduleRepository;


@Service
public class BookingService {
    @Autowired
    private WorkerScheduleRepository workerScheduleRepository;

    public Iterable<WorkerSchedule> getAllWorkerScheduleByBusinessId(Long id) {
        return workerScheduleRepository.findByBusinessId(id);
    }
}
