package sept.project.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import sept.project.backend.model.WorkerSchedule;

@Repository
public interface WorkerScheduleRepository extends CrudRepository<WorkerSchedule, Long> {
   public Iterable<WorkerSchedule> findByBusinessId(Long businessId);
}
