package sept.project.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PersonException extends RuntimeException {

    public PersonException(String message) {
        super(message);
    }
}

