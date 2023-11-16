package com.ser515.backend.service;

import com.ser515.backend.model.Team;
import com.ser515.backend.model.TeamDto;

import java.util.List;

public interface TeamService {

    Team registerTeam(TeamDto team);

    Team getTeamDetails(String teamName);

    List<Team> getAllTeams();

    List<Team> bulkUpdateTeamApprovalStatus(List<Integer> ids);

    List<Team> getTeamByAgeAndGender(Integer minAge, Integer maxAge, String gender);

    List<Team> getAllTeamsBasedOnApprovalFlag(String flag);
}
