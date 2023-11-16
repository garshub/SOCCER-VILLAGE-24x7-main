package com.ser515.backend.repository;

import com.ser515.backend.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Integer> {

    @Query("SELECT p FROM Player p WHERE p.teamId = :teamId")
    List<Player> getPlayerByTeamId(@Param("teamId") int teamId);
}
