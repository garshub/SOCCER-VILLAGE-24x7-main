package com.ser515.backend.scheduler; /**
 * Models a league with a set of teams and a schedule of matches between them
 * 
 * @author Lyndon While
 * @version v1.0
 */
import com.ser515.backend.model.SchedulerPayload;

import java.util.ArrayList;
import java.util.Scanner;

public class League
{
    // the teams in the league
    private ArrayList<String>  teams;
    // the schedule of matches
    private ArrayList<Round> fixtures;

    /**
     * Creates an object with noOfTeams teams named T1, T2, T3, etc. and an empty schedule.
     * You may assume that noOfTeams >= 0. 
     */
    public League(int noOfTeams)
    {
        teams = new ArrayList<>();
        fixtures = new ArrayList<>();
        for(int i = 1; i<=noOfTeams; i++)
        {
            String name = "T" + i;
            teams.add(name);
        }
    }

    /**
     * Creates an object with the team names from filename (one per line) and an empty schedule. 
     * Uses FileIO to read the file. 
     * You may assume that filename is a valid text file. 
     */
    public League(SchedulerPayload payload)
    {
        teams = new ArrayList<>();
        fixtures = new ArrayList<>();
        for(String s: payload.getTeams())
        {
            teams.add(s);
        }
    }

    /**
     * Returns the teams in the league.
     */
    public ArrayList<String> getTeams()
    {
        return teams;
    }

    /**
     * Returns the fixtures for the league.
     */
    public ArrayList<Round> getFixtures()
    {
        return fixtures;
    }

    /**
     * Adds the provided round to the end of the schedule.
     */
    public void addRound(Round r)
    {
        fixtures.add(r);
    }

    /**
     * Moves the last item on teams to index 1 on the list.
     * e.g. <"A", "B", "C", "D"> would become <"A", "D", "B", "C">. 
     * You may assume that teams.size() >= 2. 
     */
    public void rotateTeams()
    {
        teams.add(1, teams.get(teams.size() - 1));
        teams.remove(teams.size()-1);
    }

    /**
     * Makes a schedule for teams, if there are an even number of them. 
     * Generate teams.size()-1 rounds, rotating the teams between each one. 
     * Team 0 should be at home in the first round, then it should alternate home and away. 
     * See the project description for some examples. 
     * You may assume that teams.size() >= 2 and teams.size() is even. 
     */
    public void makeEvenSchedule()
    {
        boolean b = true;
        for(int i = 1; i<= (teams.size()-1); i++)
        {
            Round round = new Round();
            round.makeRound(this.teams, b);
            addRound(round);
            rotateTeams();
            b = !b;
        }
    }

    /**
     * Makes a schedule for teams. 
     * If there are an odd number of them, add a dummy team at the front of the list, 
     * then at the end of the process delete the dummy and all of its matches. 
     * See the project description for some examples. 
     * You may assume that teams.size() >= 2. 
     */
    public void makeSchedule()
    {
        if(teams.size() % 2 ==1) //executes if teams are odd number
        {
            teams.add(0,"dummy");
            makeEvenSchedule();
            teams.remove(0);
            for(Round r: fixtures)
            {
                r.deleteMatch(0);
            }
        }
        else //executes when teams are even. 
        {
            makeEvenSchedule(); 
        }
    }

    /**
     * Returns a string describing the schedule.
     * See the project description for the required format.
     */
    public String getDisplayValue()
    {
        String soln = "";
        for(int i = 0; i<fixtures.size(); i++)
        {
            soln+= "Round " + (i+1) +"\n" + fixtures.get(i).getDisplayValue() + "\n";
        }
        return soln;
    }

    /**
     * Prints the schedule. 
     */
    public void print()
    {
        System.out.println(getDisplayValue());
    }

//    public static void main(String [] args) {
//        League league1 = new League("teams.txt");
//        league1.makeSchedule();
//        league1.print();
//    }
}


