package com.ser515.backend.model;

import com.ser515.backend.scheduler.Round;

import java.util.ArrayList;

public class SchedulerResponse {
    private String name;

    public String getName() {
        return name;
    }

    private String age;
    private String venue;
    private ArrayList<Round> rounds;
    private String gender;

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private String email;

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public SchedulerResponse(String age, String venue, ArrayList<Round> rounds, String name, String gender, String email) {
        this.age = age;
        this.venue = venue;
        this.rounds = rounds;
        this.name = name;
        this.gender = gender;
        this.email = email;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public ArrayList<Round> getRounds() {
        return rounds;
    }

    public void setRounds(ArrayList<Round> rounds) {
        this.rounds = rounds;
    }
}
