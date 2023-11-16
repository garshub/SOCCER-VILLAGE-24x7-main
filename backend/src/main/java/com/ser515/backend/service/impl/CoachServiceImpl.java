package com.ser515.backend.service.impl;

import com.ser515.backend.model.Coach;
import com.ser515.backend.repository.CoachRepository;
import com.ser515.backend.service.CoachService;

import java.util.List;

public class CoachServiceImpl implements CoachService {

    private CoachRepository coachRepository;

    CoachServiceImpl(CoachRepository coachRepository){
        this.coachRepository = coachRepository;
    }

    @Override
    public Coach registerCoach(Coach coach) {
        return coachRepository.save(coach);
    }

    @Override
    public List<Coach> getAllCoaches() {
        return coachRepository.findAll();
    }

    @Override
    public Coach updateCoach(Coach updatedData) {

        Coach coach = coachRepository.getCoachByName(updatedData.getCoachName());
        coach.setTeamId(updatedData.getTeamId());

        return coachRepository.save(coach);
    }
}
