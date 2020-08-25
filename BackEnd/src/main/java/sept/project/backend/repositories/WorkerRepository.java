package sept.project.backend.repositories;

import org.springFramework.data.repository.CrudRepository;
import sept.project.backend.model.Worker;

public interface WorkerRepository extends CrudRepository<Worker, Long>{

    @Override
    Iterable<Worker> findAllById(Iterable<Long> iterable);
}
