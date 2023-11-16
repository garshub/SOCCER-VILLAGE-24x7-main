package com.ser515.backend.repository;

import com.ser515.backend.model.Referee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RefereeRepository extends JpaRepository<Referee, Long> {

    @Query("SELECT r FROM Referee r where r.name = :name")
    Referee getRefereeByName(@Param("name") String name);

}
