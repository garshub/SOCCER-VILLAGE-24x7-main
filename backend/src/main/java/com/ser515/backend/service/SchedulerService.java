package com.ser515.backend.service;

import com.ser515.backend.model.Matches;
import com.ser515.backend.model.SchedulerPayload;
import com.ser515.backend.model.SchedulerResponse;
import com.ser515.backend.model.Tournament;

import java.util.List;
import java.util.Map;

public interface SchedulerService {
    SchedulerResponse scheduleTournament(SchedulerPayload payload);
    SchedulerResponse getTournament(long tournamentID);
    List<Tournament> getAllTournament();
    List<Matches> updateMatchVenues(Map<Long, String> idVenueMap);
}
