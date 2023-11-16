package com.ser515.backend.service.impl;

import com.ser515.backend.exception.ResouceNotFoundException;
import com.ser515.backend.model.Matches;
import com.ser515.backend.model.SchedulerPayload;
import com.ser515.backend.model.SchedulerResponse;
import com.ser515.backend.model.Tournament;
import com.ser515.backend.repository.MatchesRepository;
import com.ser515.backend.repository.TournamentRepository;
import com.ser515.backend.scheduler.League;
import com.ser515.backend.scheduler.Match;
import com.ser515.backend.scheduler.Round;
import com.ser515.backend.service.SchedulerService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SchedulerServiceImpl implements SchedulerService {

    private TournamentRepository tournamentRepository;
    private MatchesRepository matchesRepository;

    SchedulerServiceImpl(TournamentRepository tournamentRepository, MatchesRepository matchesRepository) {
        this.tournamentRepository = tournamentRepository;
        this.matchesRepository = matchesRepository;
    }

    @Override
    public SchedulerResponse scheduleTournament(SchedulerPayload payload) {
        League league = new League(payload);
        league.makeEvenSchedule();
        ArrayList<Round> rounds = league.getFixtures();
        Tournament tour = new Tournament();
        tour.setAge_group(payload.getAge_group());
        tour.setVenue(payload.getVenues());
        tour.setName(payload.getName());
        tour.setGender(payload.getGender());
        tour.setEmail(payload.getEmail());
        tournamentRepository.save(tour);
        List<Matches> all_matches = new ArrayList<>();
        int iteration = 1;
        for (Round round : rounds) {
            for (int j = 0; j < round.getMatches().size(); j++) {
                Match m = round.getMatches().get(j);
                Matches match = new Matches();
                match.setTeam1Name(m.getHome());
                match.setTeam2Name(m.getAway());
                match.setTourid(tour.getId());
                match.setDisplayValue(m.getDisplayValue());
                match.setRound(iteration);
                matchesRepository.save(match);
                m.setId(match.getId());
                all_matches.add(match);
            }
            iteration += 1;
        }
        return new SchedulerResponse(tour.getAge_group(), tour.getVenue(), rounds, tour.getName(), tour.getGender(), tour.getEmail());
    }

    @Override
    public SchedulerResponse getTournament(long tournamentID) {
         Tournament tour = tournamentRepository.findById(tournamentID).orElseThrow(() -> new ResouceNotFoundException("Tournament", "id", tournamentID));
         ArrayList<Round> rounds = new ArrayList<>();
         List<Matches> matches = tour.getAll_matches();
         int currentRound = 1;
         while (true) {
             ArrayList<Match> match = new ArrayList<>();
             for (Matches m : matches) {
                 if (m.getRound() == currentRound) {
                     match.add(new Match(m.getTeam1Name(), m.getTeam2Name(), m.getId()));
                 }
             }
             if (match.size() == 0) {
                 break;
             }
             rounds.add(new Round(match));
             currentRound++;
         }

         return new SchedulerResponse(tour.getAge_group(), tour.getVenue(), rounds, tour.getName(), tour.getGender(), tour.getEmail());
    }

    @Override
    public List<Tournament> getAllTournament() {
        return tournamentRepository.findAll();
    }

    @Override
    public List<Matches> updateMatchVenues(Map<Long, String> idVenueMap) {
        List<Matches> matchesList = matchesRepository.findAllById(idVenueMap.keySet());

        matchesList.forEach(match -> match.setVenue(idVenueMap.get(match.getId())));

        return matchesRepository.saveAll(matchesList);
    }
}
