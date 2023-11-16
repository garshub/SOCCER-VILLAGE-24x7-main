package com.ser515.backend.service.impl;

import com.ser515.backend.model.MatchPayload;
import com.ser515.backend.model.Matches;
import com.ser515.backend.repository.MatchesRepository;
import com.ser515.backend.service.ScoreUpdateService;
import org.springframework.stereotype.Service;
import com.ser515.backend.model.UpdateRefereePayload;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScoreUpdateServiceImpl implements ScoreUpdateService {
    private MatchesRepository matchesRepository;


    public ScoreUpdateServiceImpl(MatchesRepository matchesRepository) {
        super();
        this.matchesRepository = matchesRepository;
    }

    public List<Matches> winner(List<MatchPayload> allScores) {
        List<Matches> allMatches = new ArrayList<>();
        for (int i = 0; i < allScores.size(); i++) {
            MatchPayload matchPayload = allScores.get(i);
            Matches matches = matchesRepository.findById(matchPayload.getMatchID()).get();
            if (matches != null) {
                matches.setScoreTeam1(matchPayload.getTeam1Score());
                matches.setScoreTeam2(matchPayload.getTeam2Score());
                if (matches.getScoreTeam1() > matches.getScoreTeam2()) {
                    matches.setWinner(matches.getTeam1Name());
                } else if (matches.getScoreTeam1() < matches.getScoreTeam2()) {
                    matches.setWinner(matches.getTeam2Name());
                } else
                    matches.setWinner("DRAW");
            }
            matchesRepository.save(matches);
            allMatches.add(matches);
        }
        return allMatches;
    }
    @Override
    public String updateReferee(List<UpdateRefereePayload> allData) {
        for (UpdateRefereePayload payload:  allData) {
            Matches match = matchesRepository.findById(payload.getMatchID()).get();
            match.setReferee(payload.getReferee());
            matchesRepository.save(match);
        }
        return "OK";
    }
}


