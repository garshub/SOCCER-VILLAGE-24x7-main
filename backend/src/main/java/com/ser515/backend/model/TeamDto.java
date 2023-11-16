package com.ser515.backend.model;

import java.util.List;

public class TeamDto {

    private String teamName;
    private String coachName;
    private List<PlayerDto> players;
    private String ageGroup;
    private String coachEmail;
    private String contactNo;

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getCoachName() {
        return coachName;
    }

    public void setCoachName(String coachName) {
        this.coachName = coachName;
    }

    public List<PlayerDto> getPlayers() {
        return players;
    }

    public void setPlayers(List<PlayerDto> players) {
        this.players = players;
    }

    public String getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
    }

    public String getCoachEmail() {
        return coachEmail;
    }

    public void setCoachEmail(String coachEmail) {
        this.coachEmail = coachEmail;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public Team extractTeamData(){
        Team team = new Team();
        team.setAgeGroup(this.getAgeGroup());
        team.setCoachEmail(this.getCoachEmail());
        team.setCoachName(this.getCoachName());
        team.setTeamname(this.getTeamName());
        team.setContactNumber(this.getContactNo());

        return team;
    }
}
