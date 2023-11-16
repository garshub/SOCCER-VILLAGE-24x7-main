package com.ser515.backend.repository;

import com.ser515.backend.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserDetailsRepository extends JpaRepository<UserDetails, String> {

    @Query("SELECT u FROM UserDetails u where u.email =:email")
    UserDetails findUserByEmail(@Param("email") String email);
}
