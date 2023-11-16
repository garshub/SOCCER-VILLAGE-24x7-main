package com.ser515.backend.service.impl;

import com.ser515.backend.model.Player;
import com.ser515.backend.repository.PlayerRepository;
import com.ser515.backend.service.PlayerService;

import java.util.List;

public class PlayerServiceImpl implements PlayerService {

    private PlayerRepository playerRepository;

    PlayerServiceImpl(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }

    @Override
    public Player registerPlayer(Player player) {
        return playerRepository.save(player);
    }

    @Override
    public List<Player> registerListOfPlayers(List<Player> players) {
        return playerRepository.saveAll(players);
    }

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public List<Player> getAllPlayersFilterByTeam(int teamId) {
        return playerRepository.getPlayerByTeamId(teamId);
    }
}
