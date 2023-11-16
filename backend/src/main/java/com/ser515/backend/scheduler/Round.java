package com.ser515.backend.scheduler; /**
 * Models a round of matches in a league schedule.
 * 
 * @author Lyndon While
 * @version v1.0
 */
import java.util.ArrayList;


public class Round
{
    // the list of matches
    private ArrayList<Match> matches;

    /**
     * Creates an empty round of matches.
     */
    public Round()
    {
        matches = new ArrayList<>();
    }

    public Round(ArrayList<Match> m)
    {
        matches = m;
    }

    /**
     * Returns the list of matches.
     */
    public ArrayList<Match> getMatches()
    {
        return matches;
    }

    /**
     * Adds the provided match at the end of the round.
     */
    public void addMatch(Match match)
    {
        matches.add(match);
    }

    /**
     * Removes the indicated match from the round, if the index is legal.
     */
    public void deleteMatch(int index)
    {
        if(index <= matches.size() - 1)
        {
            matches.remove(index);
        }
    }

    /**
     * Makes a round of matches for the provided teams. 
     * Teams 0 & 1 play each other (Team 0 at home iff the second argument is true), then 
     * Team 2 is at home to the last team, Team 3 is at home to the next-to-last team, and so on. 
     * e.g. for six teams A,B,C,D,E,F and second argument true, 
     * we would get the three matches A vs. B, C vs. F, D vs. E. 
     * e.g. for eight teams A,B,C,D,E,F,G,H and second argument false, 
     * we would get the four matches B vs. A, C vs. H, D vs. G, E vs. F. 
     * You may assume that teams.size() >= 2 and teams.size() is even. 
     */
    public void makeRound(ArrayList<String> teams, boolean b)
    {
        for (int i = 0; i<=teams.size()/2; i++)
        {
            this.deleteMatch(i); //resets the round
        }
        if(b) //Executes when b is true
        {
            if(teams.size()>2) 
            {
                addMatch(new Match(teams.get(0), teams.get(1)));
                for(int i = 2; i <= teams.size()/2; i++)
                {
                    addMatch(new Match(teams.get(i), teams.get(teams.size() - (i-1))));
                }
            }
            else //adds only 1 or 2 matches
            {
                addMatch(new Match(teams.get(0), teams.get(1)));
            }
        }
        else //If b is false
        {
            if(teams.size()>2)
            {
                addMatch(new Match(teams.get(1), teams.get(0)));
                for(int i = 2; i <= teams.size()/2; i++)
                {
                    addMatch(new Match(teams.get(i), teams.get(teams.size() - (i-1))));
                }
            }
            else //adds only 1 or 2 matches
            {
                addMatch(new Match(teams.get(1), teams.get(0)));
            }
        }
    }

    /**
     * Returns a string describing this round of matches. 
     * See the project description for the required format. 
     */
    public String getDisplayValue()
    {
        String soln ="";
        for(Match m: matches)
        {
            soln+=m.getDisplayValue() +"\n";
        }
        return soln;
    }
}
