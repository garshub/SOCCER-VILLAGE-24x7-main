package com.ser515.backend.controller;

import com.ser515.backend.exception.BadCredentialsException;
import com.ser515.backend.exception.UserAlreadyExistException;
import com.ser515.backend.model.UserDetails;
import com.ser515.backend.model.UserDetailsDto;
import com.ser515.backend.service.UserService;
import com.ser515.backend.utils.AES256Utils;
import com.ser515.backend.utils.RoleCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserDetails> saveUser(@RequestBody UserDetails userDetails) {

        UserDetails details = userService.getUser(userDetails.getEmail());
        if (details != null) {
            throw new UserAlreadyExistException(userDetails.getEmail());
        }

        userDetails.setPassword(AES256Utils.encrypt(userDetails.getPassword()));
        if (!userDetails.getRole().isBlank()) {
            userDetails.setRoleCode(RoleCode.valueOf(userDetails.getRole().toUpperCase()).getRoleCode());
        }

        return new ResponseEntity<>(userService.registerUser(userDetails), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDetailsDto> loginUser(@RequestBody UserDetails userCreds) {
        UserDetailsDto user = userService.login(userCreds);
        if (user == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        String pass = AES256Utils.encrypt(userCreds.getPassword());
        if (pass != null && !pass.equals(user.getPassword())) {
            throw new BadCredentialsException("Incorrect Credentials");
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping
    public List<UserDetails> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping({"{email}"})
    public ResponseEntity<UserDetails> getUserByEmail(@PathVariable("email") String emial) {
        return new ResponseEntity<>(userService.getUser(emial), HttpStatus.OK);
    }

    @DeleteMapping("{email}")
    public ResponseEntity<String> deleteUser(@PathVariable("email") String email) {
        userService.deleteUser(email);
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }
}
