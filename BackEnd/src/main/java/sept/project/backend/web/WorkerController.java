package sept.project.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/worker")
public class WorkerController {

    @Autowired
    private WorkerService workerService;

    @PostMapping("")
    public ResponseEntity<Worker> createNewWorker(@RequestBody Worker worker){
        Worker worker1 = workerService.saveUpdateWorker(worker);
        return new ResponseEntity<Worker>(worker, HttpStatus.CREATED);
    }
}