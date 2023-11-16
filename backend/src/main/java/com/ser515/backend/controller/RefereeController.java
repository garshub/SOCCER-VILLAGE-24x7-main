package com.ser515.backend.controller;

import com.ser515.backend.model.Matches;
import com.ser515.backend.model.Referee;
import com.ser515.backend.scheduler.Match;
import com.ser515.backend.service.RefereeService;
import com.ser515.backend.utils.Constants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/referee")
@CrossOrigin(origins = "*")
public class RefereeController {

    private RefereeService refereeService;

    RefereeController(RefereeService refereeService) {
        this.refereeService = refereeService;
    }

    @GetMapping
    public List<Referee> getAllReferees() {
        return refereeService.getAllReferees();
    }

    @GetMapping("/status/{status}")
    public List<Referee> getAllRefereeForStatus(@PathVariable("status") String status) {
        return refereeService.getAllRefereesWithGivenStatus(status);
    }

    @GetMapping(value="/schedule", params = "name")
    public List<Matches> getRefereeSchedule(@RequestParam String name) {
        return refereeService.getRefereeSchedule(name);
    }
    
    @PostMapping(value="/register")
    public Boolean registerReferee(@RequestBody Referee referee) {
        return refereeService.registerReferee(referee);
    }

    @RequestMapping(value = "/bulkStatusUpdate", params = "ids", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity bulkUpdateApprovalStatus(@RequestParam List<Long> ids) {

        List<Referee> result = refereeService.bulkUpdateApprovalStatus(ids);
        final boolean[] flag = {true};

        result.forEach(referee -> {
            if (!referee.getIsApproved().equalsIgnoreCase(Constants.Y)) {
                flag[0] = false;
            }
        });

        if (flag[0]) {
            return new ResponseEntity<>("All referee status updated successfully!", HttpStatus.OK);
        }

        return new ResponseEntity<>("Error! Contact the Tournament Director.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
