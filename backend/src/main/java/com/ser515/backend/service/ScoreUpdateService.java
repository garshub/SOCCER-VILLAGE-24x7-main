package com.ser515.backend.service;


import com.ser515.backend.model.MatchPayload;
import com.ser515.backend.model.Matches;
import com.ser515.backend.model.Team;
import com.ser515.backend.model.UpdateRefereePayload;

import java.util.List;

public interface ScoreUpdateService {
    List<Matches> winner(List<MatchPayload> matchPayload);
    String updateReferee(List<UpdateRefereePayload> payload);
}
