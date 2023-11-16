package com.ser515.backend.compositeKeys;

import java.io.Serializable;

public class CoachID implements Serializable {

    private Integer coachId;
    private String coachName;

    public CoachID(Integer coachId, String coachName) {
        this.coachId = coachId;
        this.coachName = coachName;
    }
}
