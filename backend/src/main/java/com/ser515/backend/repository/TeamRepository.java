package com.ser515.backend.repository;

import com.ser515.backend.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TeamRepository extends JpaRepository<Team, Integer> {

    @Query("SELECT t FROM Team t WHERE t.teamname =:name")
    Team findTeamByName(@Param("name") String name);

//    @Query("SELECT t FROM Team t WHERE t.minAge >= :minAge and t.maxAge <= :maxAge and t.gender =:gender")
//    List<Team> findTeamsByAgeAndGender(@Param("minAge") Integer minAge, @Param("maxAge") Integer maxAge, @Param("gender") String gender);
//
//    @Query("SELECT t FROM Team t WHERE t.minAge >= ?1 AND t.maxAge <= ?2 AND t.gender = ?3")
//    List<Team> findTeamsByAgeAndGender(Integer minAge ,Integer maxAge ,String gender);
}
