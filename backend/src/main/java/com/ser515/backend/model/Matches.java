package com.ser515.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "matches")
public class Matches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Team1", nullable = false)
    private String team1Name;

    @Column(name = "Team2", nullable = false)
    private String team2Name;

    @Column(name = "Team1Score", nullable = false)
    private int scoreTeam1;

    @Column(name = "Team2Score", nullable = false)
    private int scoreTeam2;

    @Column(name = "display_value", nullable = false)
    private String displayValue;
    
    @Column(name = "referee")
    private String referee;

    @Column(name = "round", nullable = false)
    private int round;

    public int getRound() {
        return round;
    }

    public void setRound(int round) {
        this.round = round;
    }

    @Column(name = "winner")
    private String winner;


    @ManyToOne
    @JoinColumn(name = "tourid", insertable = false, updatable = false)
    private Tournament tour;

    @Column(name = "venue")
    private String venue;

    private Long tourid;

    public Long getTourid() {
        return tourid;
    }

    public void setTourid(Long tourid) {
        this.tourid = tourid;
    }

    public long getId() {
        return id;
    }
    
    public void setReferee(String referee) {
        this.referee = referee;
    }

    public String getReferee() {
        return this.referee;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTeam1Name() {
        return team1Name;
    }

    public void setTeam1Name(String team1Name) {
        this.team1Name = team1Name;
    }

    public String getTeam2Name() {
        return team2Name;
    }

    public void setTeam2Name(String team2Name) {
        this.team2Name = team2Name;
    }

    public int getScoreTeam1() {
        return scoreTeam1;
    }

    public void setScoreTeam1(int scoreTeam1) {
        this.scoreTeam1 = scoreTeam1;
    }

    public int getScoreTeam2() {
        return scoreTeam2;
    }

    public void setScoreTeam2(int scoreTeam2) {
        this.scoreTeam2 = scoreTeam2;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }

    public String getDisplayValue() {
        return displayValue;
    }

    public void setDisplayValue(String displayValue) {
        this.displayValue = displayValue;
    }

    @JsonBackReference
    public Tournament getTour() {
        return tour;
    }

    public void setTour(Tournament tour) {
        this.tour = tour;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }
}


