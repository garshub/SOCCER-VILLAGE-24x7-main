package com.ser515.backend.service.impl;

import com.ser515.backend.exception.QueryReturnedNull;
import com.ser515.backend.model.*;
import com.ser515.backend.repository.CoachRepository;
import com.ser515.backend.repository.PlayerRepository;
import com.ser515.backend.repository.TeamRepository;
import com.ser515.backend.service.CoachService;
import com.ser515.backend.service.PlayerService;
import com.ser515.backend.service.TeamService;
import com.ser515.backend.utils.Constants;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TeamServiceImpl implements TeamService {

    private TeamRepository teamRepository;
    private CoachService coachService;
    private PlayerService playerService;

    public TeamServiceImpl(TeamRepository teamRepository, CoachRepository coachRepository, PlayerRepository playerRepository) {
        this.teamRepository = teamRepository;
        this.coachService = new CoachServiceImpl(coachRepository);
        this.playerService = new PlayerServiceImpl(playerRepository);
    }

    @Override
    public Team registerTeam(TeamDto teamDto) {

        //register coach
        Coach coach = new Coach();
        coach.setCoachName(teamDto.getCoachName());
        coach = coachService.registerCoach(coach);

        //process player data to calculate team stat
        List<PlayerDto> playerDtoList = teamDto.getPlayers();
        final Integer[] minAge = {Integer.MAX_VALUE};
        final Integer[] maxAge = {Integer.MIN_VALUE};
        Set<String> genderList = new HashSet<>();
        String teamGender = "MF";

        playerDtoList.forEach(p -> {
            maxAge[0] = Math.max(maxAge[0], p.getAge());
            minAge[0] = Math.min(minAge[0], p.getAge());
            genderList.add(p.getGender());
        });

        if (genderList.size() == 1) {
            teamGender = genderList.stream().toList().get(0);
        }

        //register team
        Team team = teamDto.extractTeamData();
        team.setCoachId(coach.getCoachId());
        team.setMinAge(minAge[0]);
        team.setMaxAge(maxAge[0]);
        team.setGender(teamGender);
        team.setIsApproved(Constants.N);

        team = teamRepository.save(team);
        final Integer teamId = team.getTeamId();

        //register players
        playerDtoList.forEach(playerDto -> {
            Player player = playerDto.extractPlayerData();
            player.setTeamId(teamId);
            playerService.registerPlayer(player);
        });

        //updating coach with teamID
        coach.setTeamId(teamId);
        coachService.updateCoach(coach);

        return team;
    }

    @Override
    public Team getTeamDetails(String teamName) {
        return teamRepository.findTeamByName(teamName);
    }

    @Override
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @Override
    public List<Team> bulkUpdateTeamApprovalStatus(List<Integer> ids) {
        Iterable<Integer> iterable = ids.stream().collect(Collectors.toList());
        List<Team> teamList = teamRepository.findAllById(iterable);

        teamList.forEach(team -> {
            team.setIsApproved(Constants.Y);
            teamRepository.save(team);
        });

        return teamList;
    }

    @Override
    public List<Team> getTeamByAgeAndGender(Integer minAge, Integer maxAge, String gender) {
        List<Team> teamList = teamRepository.findAll();

        teamList = teamList.stream()
                .filter(team -> team.getGender().equalsIgnoreCase(gender))
                .filter(team -> team.getMinAge() >= minAge && team.getMaxAge() <= maxAge)
                .collect(Collectors.toList());

        if (teamList.isEmpty()) {
            throw new QueryReturnedNull("Team", minAge, maxAge, gender);
        }
        return teamList;
    }

    @Override
    public List<Team> getAllTeamsBasedOnApprovalFlag(String flag) {
        List<Team> teamList = teamRepository.findAll();
        List<Team> result = teamList.stream().filter(team -> team.getIsApproved().equalsIgnoreCase(flag)).collect(Collectors.toList());

        if (result.isEmpty()) {
            throw new QueryReturnedNull("Team", flag);
        }
        return result;
    }
}
