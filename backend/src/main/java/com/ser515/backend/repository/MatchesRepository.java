package com.ser515.backend.repository;

import com.ser515.backend.model.Team;
import com.ser515.backend.model.Matches;
import com.ser515.backend.model.Tournament;
import com.ser515.backend.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface MatchesRepository extends JpaRepository<Matches, Long> {

    @Query("SELECT m FROM Matches m where m.tourid =:tourid")
    ArrayList<Matches> getAllMatchesByTournamentID(@Param("tourid") long tourid);

    @Query("SELECT m FROM Matches m where m.referee =:referee")
    ArrayList<Matches> getRefereeSchedule(@Param("referee") String referee);
}