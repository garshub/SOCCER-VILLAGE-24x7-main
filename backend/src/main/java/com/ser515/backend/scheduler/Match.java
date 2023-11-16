package com.ser515.backend.scheduler;

/**
 * Models a match between two teams.
 * 
 * @author Lyndon While
 * @version v1.0
 */
public class Match
{
    // home and away team names
    private String home, away;

    private Long id = null;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Creates a match between the provided teams.
     */
    public Match(String home, String away)
    {
        this.home = home;
        this.away = away;
    }

    public Match(String home, String away, long id)
    {
        this.home = home;
        this.away = away;
        this.id = id;
    }

    /**
     * Returns the home team for this match.
     */
    public String getHome()
    {
        return home;
    }

    /**
     * Returns the away team for this match.
     */
    public String getAway()
    {
        return away;
    }
    
    /**
     * Returns a string describing this match. 
     * See the project description for the required format. 
     */
    public String getDisplayValue()
    {
        String soln = home + " vs. " + away;
        return soln;
    }
}
