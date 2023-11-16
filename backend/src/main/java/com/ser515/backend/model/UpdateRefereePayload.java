package com.ser515.backend.model;

public class UpdateRefereePayload {
    private long matchID;

    private String referee;

    public String getReferee() {
        return referee;
    }

    public long getMatchID() {
        return matchID;
    }
}
