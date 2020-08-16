package sept.project.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WorkerSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Business ID is required")
    private Long businessId;
    @NotBlank
    private Long workerId;
    @JsonFormat(pattern ="yyyy-MM-dd@HH:mm:ss")
    private Date startDateTime;
    @JsonFormat(pattern ="yyyy-MM-dd@HH:mm:ss")
    private Date endDateTime;
}
