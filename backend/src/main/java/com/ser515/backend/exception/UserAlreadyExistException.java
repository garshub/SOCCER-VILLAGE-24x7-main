package com.ser515.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(value = HttpStatus.FOUND)
public class UserAlreadyExistException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;
    private String email;

    public UserAlreadyExistException(String email) {
        super(String.format("%s already exist", email));
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}