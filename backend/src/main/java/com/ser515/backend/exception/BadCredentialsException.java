package com.ser515.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class BadCredentialsException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private String message;

    public BadCredentialsException(String message) {
        super(message);
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
