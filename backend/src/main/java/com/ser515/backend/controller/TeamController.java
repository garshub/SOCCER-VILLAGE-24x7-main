package com.ser515.backend.controller;

import com.ser515.backend.model.Team;
import com.ser515.backend.model.TeamDto;
import com.ser515.backend.service.TeamService;
import com.ser515.backend.utils.Constants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/team")
@CrossOrigin(origins = "*")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/customTeamFilter")
    public List<Team> getTeamByAgeAndGender(@RequestParam Map<String, String> customQuery) {
        Integer minAge = Integer.parseInt(customQuery.get("minAge"));
        Integer maxAge = Integer.parseInt(customQuery.get("maxAge"));
        String gender = customQuery.get("gender");

        return teamService.getTeamByAgeAndGender(minAge, maxAge, gender);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Team> getTeamDetails(@PathVariable("name") String name) {
        return new ResponseEntity<>(teamService.getTeamDetails(name), HttpStatus.OK);
    }

    @GetMapping
    public List<Team> getAllTeams() {
        return teamService.getAllTeams();
    }

    @PostMapping("/register")
    public ResponseEntity<Team> resisterTeam(@RequestBody TeamDto teamDto) {
        return new ResponseEntity<>(teamService.registerTeam(teamDto), HttpStatus.CREATED);
    }

    @GetMapping("/status/{status}")
    public List<Team> getAllTeamsBasedOnApprovalFilter(@PathVariable("status") String status){
        List<Team> teamList = teamService.getAllTeamsBasedOnApprovalFlag(status);
        System.out.println(teamList.size());
        return teamList;
    }

    @RequestMapping(value = "/bulkStatusUpdate", params = "ids", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity updateTeamStatus(@RequestParam List<Integer> ids){

        List<Team> result = teamService.bulkUpdateTeamApprovalStatus(ids);
        final boolean[] flag = {true};

        result.forEach(team -> {
            if (!team.getIsApproved().equalsIgnoreCase(Constants.Y)) {
                flag[0] = false;
            }
        });

        if (flag[0]) {
            return new ResponseEntity<>("All Team status updated successfully!", HttpStatus.OK);
        }

        return new ResponseEntity<>("Error! Contact the Tournament Director.", HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
