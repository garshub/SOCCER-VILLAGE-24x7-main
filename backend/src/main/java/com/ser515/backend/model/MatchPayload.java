package com.ser515.backend.model;

public class MatchPayload {
    private long matchID;
    private int team1Score;
    private int team2Score;

    public int getTeam1Score() {
        return team1Score;
    }

    public int getTeam2Score() {
        return team2Score;
    }

    public long getMatchID() {
        return matchID;
    }
}
