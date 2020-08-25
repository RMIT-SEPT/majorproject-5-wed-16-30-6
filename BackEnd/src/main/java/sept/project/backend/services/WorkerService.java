package sept.project.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sept.project.backend.model.Person;
import sept.project.backend.repositories.PersonRepository;

@Service
public class WorkerService{
    @Autowired
    private WorkerRepository workerRepository;

    public Worker saveUpdateWorker(Worker worker){

        return workerRepository.save(Worker);
    }
}

