package sept.project.backend.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import sept.project.backend.model.WorkerSchedule;

import java.util.Optional;

@Repository
public interface WorkerScheduleRepository extends CrudRepository<WorkerSchedule, Long> {
   @Query("SELECT s FROM WorkerSchedule s WHERE s.businessId = ?1 ORDER BY s.startDateTime")
   public Iterable<WorkerSchedule> findByBusinessId(@Param("businessId") Long businessId);

   @Query("SELECT s FROM WorkerSchedule s WHERE s.id = ?1")
   WorkerSchedule findByIdentifier(Long id);

   @Override
   Iterable<WorkerSchedule> findAll();
}
