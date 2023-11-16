package com.ser515.backend.service.impl;

import com.ser515.backend.model.Matches;
import com.ser515.backend.model.Referee;
import com.ser515.backend.repository.MatchesRepository;
import com.ser515.backend.repository.RefereeRepository;
import com.ser515.backend.service.RefereeService;
import com.ser515.backend.utils.Constants;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RefereeServiceImpl implements RefereeService {

    private RefereeRepository refereeRepository;
    private MatchesRepository matchesRepository;

    public RefereeServiceImpl(RefereeRepository refereeRepository, MatchesRepository matchesRepository)
    {
        this.refereeRepository = refereeRepository;
        this.matchesRepository = matchesRepository;
    }

    @Override
    public List<Referee> getAllReferees() {
        return refereeRepository.findAll();
    }

    @Override
    public List<Referee> getAllRefereesWithGivenStatus(String status) {
        List<Referee> refereeList = getAllReferees();

        return refereeList.stream()
                .filter(referee -> referee.getIsApproved().equalsIgnoreCase(status))
                .collect(Collectors.toList());
    }

    @Override
    public List<Referee> bulkUpdateApprovalStatus(List<Long> refereeId) {
        Iterable<Long> iterable = refereeId.stream().collect(Collectors.toList());
        List<Referee> refereeList = refereeRepository.findAllById(iterable);

         refereeList.forEach(referee -> {
             referee.setIsApproved(Constants.Y);
             refereeRepository.save(referee);
         });

        return refereeList;
    }

    @Override
    public List<Matches> getRefereeSchedule(String referee_name) {
        List<Matches> match = matchesRepository.getRefereeSchedule(referee_name);
        return match;
    }
    
    @Override
    public Boolean registerReferee(Referee referee) {
        referee.setIsApproved("N");
        refereeRepository.save(referee);
        return true;
    }
}
