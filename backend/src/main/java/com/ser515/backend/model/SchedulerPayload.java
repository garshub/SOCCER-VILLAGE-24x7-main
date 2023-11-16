package com.ser515.backend.model;

import java.util.ArrayList;

public class SchedulerPayload {
    private ArrayList<String> teams;
    private String age_group;
    private String venues;
    private String gender;
    private String name;
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getTeams() {
        return teams;
    }

    public String getAge_group() {
        return age_group;
    }

    public String getVenues() {
        return venues;
    }
}
