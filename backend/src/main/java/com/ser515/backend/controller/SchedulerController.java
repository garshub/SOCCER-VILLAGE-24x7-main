package com.ser515.backend.controller;

import com.ser515.backend.model.SchedulerPayload;
import com.ser515.backend.model.SchedulerResponse;
import com.ser515.backend.model.Tournament;
import com.ser515.backend.scheduler.Round;
import com.ser515.backend.service.SchedulerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/tournament")
@CrossOrigin(origins = "*")
public class SchedulerController {
    private SchedulerService schedulerService;

    public SchedulerController(SchedulerService schedulerService) {
        this.schedulerService = schedulerService;
    }

    @PostMapping("schedule")
    public ResponseEntity<SchedulerResponse> scheduleTournament(@RequestBody SchedulerPayload payload) {
        return new ResponseEntity<>(this.schedulerService.scheduleTournament(payload), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<SchedulerResponse> getTournament(@PathVariable("id") long tournamentID) {
        return new ResponseEntity<>(this.schedulerService.getTournament(tournamentID), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Tournament>> getTournament() {
        return new ResponseEntity<>(this.schedulerService.getAllTournament(), HttpStatus.OK);
    }
}
