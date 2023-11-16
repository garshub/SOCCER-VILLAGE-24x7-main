package com.ser515.backend.controller;

import com.ser515.backend.model.MatchPayload;
import com.ser515.backend.model.MatchVenueDTO;
import com.ser515.backend.model.Matches;
import com.ser515.backend.service.SchedulerService;
import com.ser515.backend.service.ScoreUpdateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.ser515.backend.model.UpdateRefereePayload;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin(origins = "*")
public class MatchesController {
    private ScoreUpdateService scoreUpdateService;
    private SchedulerService schedulerService;

    public MatchesController(ScoreUpdateService scoreUpdateService, SchedulerService schedulerService) {
        this.scoreUpdateService = scoreUpdateService;
        this.schedulerService = schedulerService;
    }

    @PostMapping("update")
    public ResponseEntity<List<Matches>> updateWinner(@RequestBody List<MatchPayload> matchPayload){
         return new ResponseEntity<List<Matches>>(scoreUpdateService.winner(matchPayload),HttpStatus.CREATED);
    }
    
    @PostMapping("/referee/update")
    public ResponseEntity<String> updateReferee(@RequestBody List<UpdateRefereePayload> refereePayload){
        return new ResponseEntity<>(scoreUpdateService.updateReferee(refereePayload),HttpStatus.CREATED);
    }

    @PutMapping("/matchVenueUpdate")
    public ResponseEntity matchVenueUpdate(@RequestBody MatchVenueDTO matchVenueDTO){

        Map<Long, String> idVenueMap = new HashMap<>();


        matchVenueDTO.getMatchVenueKeys().forEach(mv -> idVenueMap.put(mv.getMatchId(), mv.getVenue()));

        if(!schedulerService.updateMatchVenues(idVenueMap).isEmpty()){
            return new ResponseEntity("All matches updated with given venues!", HttpStatus.OK);
        }
        return new ResponseEntity("Error! Contact Tournament Director.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
