package com.ser515.backend.service.impl;

import com.ser515.backend.exception.ResouceNotFoundException;
import com.ser515.backend.model.UserDetails;
import com.ser515.backend.model.UserDetailsDto;
import com.ser515.backend.repository.UserDetailsRepository;
import com.ser515.backend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserDetailsRepository userDetailsRepository;

    public UserServiceImpl(UserDetailsRepository userDetailsRepository) {
        super();
        this.userDetailsRepository = userDetailsRepository;
    }

    @Override
    public UserDetails registerUser(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    @Override
    public UserDetails getUser(String email) {
        return userDetailsRepository.findById(email).orElseThrow(() ->
                new ResouceNotFoundException("User", "email", email));
    }

    @Override
    public List<UserDetails> getAllUsers() {
        return userDetailsRepository.findAll();
    }

    @Override
    public void deleteUser(String email) {
        userDetailsRepository.findById(email).orElseThrow(
                () -> new ResouceNotFoundException("Email", "email", email));
        userDetailsRepository.deleteById(email);
    }

    @Override
    public UserDetailsDto login(UserDetails userCreds) {
        UserDetails user = userDetailsRepository.findUserByEmail(userCreds.getEmail());
        if (user == null) {
            throw new ResouceNotFoundException("user", "empty", userCreds.getEmail());
        }
        return new UserDetailsDto(user);
    }
}
