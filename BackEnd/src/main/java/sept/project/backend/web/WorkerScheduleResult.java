package sept.project.backend.web;

import sept.project.backend.model.Person;
import sept.project.backend.model.WorkerSchedule;

public class WorkerScheduleResult {
    public Iterable<WorkerSchedule> schedules;
    public Iterable<Person> workers;
}
