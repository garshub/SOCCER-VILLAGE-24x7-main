package com.ser515.backend.repository;

import com.ser515.backend.model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CoachRepository extends JpaRepository<Coach, Integer> {

    @Query("SELECT c FROM Coach c where c.coachName = :coachName")
    Coach getCoachByName(@Param("coachName") String coachName);
}
