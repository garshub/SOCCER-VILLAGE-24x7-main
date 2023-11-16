package com.ser515.backend.service;

import com.ser515.backend.model.Coach;

import java.util.List;

public interface CoachService {

    Coach registerCoach(Coach coach);
    List<Coach> getAllCoaches();
    Coach updateCoach(Coach updatedData);
}
