package com.ser515.backend.model;

public class PlayerDto {

    private String name;
    private String gender;
    private Integer age;
    private String email;
    private int teamId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public Player extractPlayerData() {

        Player player = new Player();
        player.setPlayerName(this.getName());
        player.setEmail(this.getEmail());
        player.setAge(this.getAge());
        player.setGender(this.getGender());
        player.setTeamId(this.getTeamId());

        return player;
    }

}
