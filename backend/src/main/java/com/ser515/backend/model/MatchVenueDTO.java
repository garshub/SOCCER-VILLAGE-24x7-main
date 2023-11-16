package com.ser515.backend.model;

import com.ser515.backend.compositeKeys.MatchVenueKey;

import java.util.List;

public class MatchVenueDTO {

    private List<MatchVenueKey> matchVenueKeys;

    public List<MatchVenueKey> getMatchVenueKeys() {
        return matchVenueKeys;
    }

    public void setMatchVenueKeys(List<MatchVenueKey> matchVenueKeys) {
        this.matchVenueKeys = matchVenueKeys;
    }
}
