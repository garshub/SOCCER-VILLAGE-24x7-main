package com.ser515.backend.service;

import com.ser515.backend.model.UserDetails;
import com.ser515.backend.model.UserDetailsDto;

import java.util.List;

public interface UserService {

    UserDetails registerUser(UserDetails userDetails);

    UserDetails getUser(String email);

    List<UserDetails> getAllUsers();

    void deleteUser(String email);

    UserDetailsDto login(UserDetails userCreds);
}
