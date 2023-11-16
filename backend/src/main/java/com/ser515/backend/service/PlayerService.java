package com.ser515.backend.service;

import com.ser515.backend.model.Player;

import java.util.List;

public interface PlayerService {

    Player registerPlayer(Player player);
    List<Player> registerListOfPlayers(List<Player> player);
    List<Player> getAllPlayers();
    List<Player> getAllPlayersFilterByTeam(int teamId);
}
