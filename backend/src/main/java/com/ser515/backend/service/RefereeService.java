package com.ser515.backend.service;

import com.ser515.backend.model.Matches;
import com.ser515.backend.model.Referee;

import java.util.List;

public interface RefereeService {

    List<Referee> getAllReferees();
    List<Referee> getAllRefereesWithGivenStatus(String status);
    List<Referee> bulkUpdateApprovalStatus(List<Long> refereeId);
    List<Matches> getRefereeSchedule(String referee_name);
    Boolean registerReferee(Referee referee);
}
