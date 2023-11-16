import React from "react";
import "./RulesFAQs.css";

const RulesFAQs = props => {
    return (
    <div className="rulesFAQsContainer">
        <div className="rulesFAQsBody">
            <div className="titleDiv">
                <div className="titleLink" onClick={() => document.getElementById('rules-div').scrollIntoView({ behavior: 'smooth'})}>Rules</div>
                <div className="titleLink" onClick={() => document.getElementById('faqs-div').scrollIntoView({ behavior: 'smooth'})}>FAQs</div>
            </div>
            <div id="rules-div" className="partitionContainer">
                <div className="partitionTitle">TEAMS FROM THE UNITED STATES:</div>
                <div className="partitionText">
                <ol>
                    <li>The Players must present picture identification cards issued by the teams Federation Organization Member (USYS, CLUB SOCCER, AYSO, other)</li>
                    <li>Teams must provide proof of approval of the team’s participation from the teams Federation Organization Member.</li>
                    <li>Teams from outside the State Association, Ohio South Youth Soccer Association, where the tournament is located must provide proof of permission to travel. Teams must be in good standing with their Federation Organization.</li>
                </ol>
                </div>
                <div className="partitionTitle">FOREIGN TEAMS:</div>
                <div className="partitionText">
                    For a team coming from a CONCACAF nation:
                    <ol>
                        <li>Players must present passports at registration or, if from a nation that the United States does not require a passport, proof of entry into the United States that is required by the United States.</li>
                        <li>Teams are required to have and present player picture identification cards.</li>
                        <li>Teams must have a completed form from its Provincial or National Association approving the team’s participation in the tournament.</li>
                    </ol>
                </div>
                <div className="partitionTitle">ROSTERS:</div>
                <div className="partitionText">
                        The Roster submitted at Tournament Registration will be the official Roster for the Tournament and will be frozen and may not be altered. A player may only play for one team.
                </div>
                <div className="partitionTitle">CREDENTIALS:</div>
                <div className="partitionText">
                    Player and Coach Credentials and Uniforms
                    <ol>
                        <li>Player and coach picture identification cards are to be present and available at all matches.</li>
                        <li>All shirt numbers of each player must be different.</li>
                    </ol>
                </div>

                <div className="partitionTitle">NOTE:</div>
                <div className="partitionText">
                    The Tournament reserves the right to consolidate age groups if necessary. We will have at least 1 level of competition for each division. Gold, Red, White, Black, Blue, etc. If we consolidate groups into an 11v11 age group we will allow teams in this age group to move to the other age group.
                </div>
                <div className="partitionTitle">GUEST PLAYERS:</div>
                <div className="partitionText">
                    Four (4) guest players will be allowed per team. Guest player Rosters should be validated by your state association/country federation (if required by your association).
                </div>
                <div className="partitionTitle">TEAMS:</div>
                <div className="partitionText">
                    <ol>
                        <li>The first team listed in the tournament schedule on the website is the home team and are responsible to change in a color conflict.</li>
                        <li>A maximum of 3 coaches and a State issued Director of Coaches (DOC) pass are permitted on the coach’s side of the field.</li>
                        <li>All coaches must remain within 20 yards of the center line on their half of the field, and both team's spectators will be on the opposite side of the field.</li>
                        <li>Field marshals will communicate which side is the coach’s side if questions arise.</li>
                        <li>Spectators are not permitted behind the end line and specifically the goals.</li>
                    </ol>
                </div>

                <div className="partitionTitle">LAWS of the GAME:</div>
                <div className="partitionText">
                    All FIFA Laws of the Game Apply unless stated below.
                </div>

                <div className="partitionTitle">Player Substitution:</div>
                <div className="partitionText">
                    <ol>
                        <li>Substitutes must be at the midfield line.</li>
                        <li>Unlimited substitutions for all age groups will be allowed with the consent of the referee.</li>
                        <li>Before a throw-in in your favor. The team in possession of the ball for a throw-in may substitute. If the team in possession of the ball for a throw-in substitutes player(s), the opposing team may substitute any number of players at the same time.</li>
                        <li>Before a goal-kick.</li>
                        <li>After a score by either team.</li>
                        <li>At half time.</li>
                        <li>After an injury, by either team, when the referee stops play.</li>
                        <li>After a caution, one for one by both teams, if the cautioned player is substituted.</li>
                    </ol>
                </div>

                <div className="partitionTitle">Match Lengths:</div>
                <div className="partitionText">
                    <ol>
                        <li>All games will consist of two halves of equal length.</li>
                        <li>No overtime periods in preliminary games.</li>
                        <li>The game clock will not be stopped because of injury to any player. Due to the time allowed for the completion of all games, the clock should run continuously, except if deemed necessary by the referee.</li>
                        <li>Each half shall end when, in the opinion of the referee, the assigned time has been completed.</li>
                        <li>See the chart above for game lengths for both preliminary and final games for all divisions.</li>
                        <li>The Tournament Director(s) reserves the right to adjust game length for conditions beyond their control. See Weather/Reschedule section below.</li>
                    </ol>
                </div>

                <div className="partitionTitle">NO HEADING RULE:</div>
                <div className="partitionText">
                    All U11 and younger divisions are prohibited from deliberately striking a soccer ball with any portion of their head (aka heading). Refer to US Youth Soccer Rule 305.
                </div>

                <div className="partitionTitle">7v7 Offside:</div>
                <div className="partitionText">
                    Please note: Attacking players are in an offside position only when they are in their opponent's build-out area. The build-out lines are used as the offsides lines, therefore no offside offense can occur between the two build-out lines. This in effect is an "offside free zone".
                </div>

                <div className="partitionTitle">CONCUSSION LAW:</div>
                <div className="partitionText">
                    All coaches MUST have completed the Concussion Training Course for Coaches. It is recommended that all coaches on the sideline have their concussion certificate form and carry the certificate to each game.
                </div>

                <div className="partitionTitle">BLOOD:</div>
                <div className="partitionText">
                    A player who is either bleeding or has blood on his/her uniform shall be required to be removed from the field and allowed to return only when in the opinion of the referee the bleeding has stopped and the blood has been removed from the uniform.
                </div>

                <div className="partitionTitle">SPECIFIC LAWS of the GAME:</div>
                <div className="partitionText">
                    <ol>
                        <li>Red cards will be administered as per FIFA laws of the game. The player or coach will serve a one game suspension unless otherwise determined by the Tournament Director.</li>
                        <li>A player or coach sent off for a second caution will not be allowed to play for the remainder of that game and their next game.</li>
                        <li>Un-served Red cards and game report will be forwarded to their appropriate State or National organizations.</li>
                    </ol>
                </div>

                <div className="partitionTitle">GAME BALLS:</div>
                <div className="partitionText">
                    The Tournament will supply the game balls for all games when possible.
                </div>

                <div className="partitionTitle">SAFETY:</div>
                <div className="partitionText">
                    <ol>
                        <li>The referee’s decision as to the safety of the players is final.</li>
                        <li>All players must wear shin guards.</li>
                        <li>No metal-rimmed glasses or jewelry of any kind will be permitted.</li>
                        <li>Casts, splints or body braces made of a hard substance in its final form such as leather, rubber, plastic, plaster or fiberglass must be covered on all exterior surfaces with high density polyurethane or an alternate material of similar physical properties to protect the injury. Players may not play without the approval of the Referee.</li>
                    </ol>
                </div>

                <div className="partitionTitle">FORFEITS:</div>
                <div className="partitionText">
                    Teams not at the field ready to play with a minimum of eligible players at the scheduled game time will forfeit the match at the discretion of the tournament committee. Forfeited scores will be counted as 3 – 0. Teams forfeiting games will not be able to advance to the playoff rounds.
                </div>

                <div className="partitionTitle">TOURNAMENT FORMAT:</div>
                <div className="partitionText">
                    For all age groups the Tournament format calls for three preliminary round games (round robin) with Final Matches in each division. All Divisions will play their Finals on Sunday PM.
                    Note: Divisions with 5 teams will play 4 games, 2 games per day, and the top 2 teams will receive awards. Divisions with 5 team divisions will not play a Finals game.
                </div>

                <div className="partitionTitle">MATCH SCHEDULES:</div>
                <div className="partitionText">
                    The ONLINE Schedules are the OFFICIAL schedules of the adidas Warrior Memorial Day Classic. Each team will be scheduled for a minimum of 3 preliminary games. A maximum of 2 matches will be played on any one day. In cases where a team drops out of the competition some teams may play less than 3 games. See Forfeits for scoring this type of game.
                </div>

                <div className="partitionTitle">REFEREES:</div>
                <div className="partitionText">
                    Referees will be USSF certified. Referee decisions are final.
                </div>

                <div className="partitionTitle">PROCEDURES for Determining GROUP WINNERS:</div>
                <div className="partitionText">
                    THE CENTER REFEREE WILL SIGN THE GAME CARD CERTIFYING THE FINAL SCORE which will then be delivered to the HQ tent at each site. Site scorer will be responsible for updating the website at warriorclassic.com. Bracket standings leading to championship play, will be determined on the following basis:
                </div>

                <div className="partitionTitle">STANDINGS & TIE-BREAKERS:</div>
                <div className="partitionText">
                    Preliminary games:
                    <ol>
                        <li>No overtime periods will be played for Preliminary games.</li>
                        <li>Each team will be awarded three points for a win, one point for a tie, and no points for a loss.</li>
                        <li>In the event of ties in the group standing, the following procedure will determine the group winner:</li>
                        <li>Team with the most points won.</li>
                        <li>Winner of the game played between the tied teams. (If three or more teams are tied for the group lead, Step 2 is by-passed, go to Step 3).</li>
                        <li>Highest number of total NET goals (goal differential). Maximum goal differential per game is three (3).</li>
                        <li>Fewer total goals allowed.</li>
                        <li>KICKS from the Mark</li>
                    </ol>
                    Finals Championship games:
                    <ol>
                        <li>Ties at the end of regulation will be decided by the Overtime Procedure listed above.</li>
                        <li>KICKS from the Mark ELIMINATION (FIFA laws): When Final matches are still tied after overtime the FIFA laws of the game for KICKS from the Mark apply.</li>
                    </ol>
                </div>

                <div className="partitionTitle">INTERRUPTED GAMES:</div>
                <div className="partitionText">
                    Games interrupted in the first half:
                    <ol>
                        <li>If the first half has not been completed and the game is stopped, every effort will be made to complete the game, or play to completion of at least the first half and record the score as final.</li>
                        <li>Games shall be considered completed if the first half has concluded. The score at the stoppage of play will be the final game score.</li>
                        <li>If a game is suspended due to weather problems, field conditions or other situations beyond the tournaments control, each team’s head coach must stay in contact with their site’s tournament headquarters for further instructions go to your car but DO NOT LEAVE THE SITE. Game playing time may be decreased, or games may be concluded at the point of interruption, if necessary.</li>
                    </ol>
                </div>

                <div className="partitionTitle">STANDARDS of CONDUCT & DISCIPLINE:</div>
                <div className="partitionText">
                    Disciplinary action taken against a coach will be levied in the next game in which he/she coaches the team playing at the time of the original infraction, or to the next game coached if the violation occurred during the last game for that team. If additional behavior problems occur, the Directors reserve the right to levy additional discipline up to and including expulsion from the Tournament.
                    <ol>
                        <li>All participants in the adidas Warrior Memorial Day Classic will be expected to maintain high standards of conduct during their stay in the Dayton area. These standards are expected of players, referees, and other guests in the hotels and motels; keeping noise in the hallways to a minimum, refraining from kicking soccer balls inside any of the buildings, and being respectful of the property of others. Should it come to the attention of the Tournament Directors that a person (or persons) has failed to observe these guidelines; the Director reserves the right to take remedial action. Said action, depending upon the circumstances, may range from a warning, a reduction in points in the standings, or banning that team and/or all teams in its club from future participation in the tournament.</li>
                        <li>There shall be no dissent between players and/or coaches and the referee. Questioning a referee is considered dissent. All coaches are responsible for the actions of his or her spectators, specifically verbal abuse of referees. Such abuse will not be tolerated! Violation may result in forfeiture of the game and/or expulsion from further play.</li>
                        <li>Any player or coach ejected from a game will be ineligible to participate in the next scheduled game (a minimum of one game suspension depending upon the severity of the offense). The player/coach pass is to be turned in to the referee headquarters immediately following the initial suspension game. If dismissed in the last game, the player/coach card will be returned to the team if there is not an assault associated with that card. In this case the player/coach card will be held and returned to the appropriate state association.</li>
                        <li>All coaches will remain within 20 yards of the center-line on their half of the field, on the side opposite of both team's spectators. Teams will be located on the same side of the field. Spectators will be on the opposite side.</li>
                        <li>Spectators may be ejected from the park for improper conduct, at the discretion of the tournament officials. Artificial noise makers, such as air horns, bells, etc. are not permitted.</li>
                        <li>If field conditions are such that there is a problem with interference by an outside agent, such as a tree overhanging the field for instance, the play will be restarted with a drop ball. Cloud Park may have some interference from trees. If the ball hits the trees and goes directly out of touch the play will resume with a throw-in.</li>
                        <li>PETS are NOT allowed at any sites.</li>
                        <li>ALL sites are SMOKE FREE!</li>
                        <li>Persons ejected due to any of the above situations must leave the site immediately.</li>
                    </ol>
                </div>

                <div className="partitionTitle">DISCIPLINARY ACTIONS:</div>
                <div className="partitionText">
                    Report of Disciplinary action taken against any team will be reported to that teams provincial or:
                    <ol>
                        <li>For United States teams, the procedure for notifying the Federation Organization Member of that team of disciplinary action taken or required will be followed.</li>
                        <li>For CONCACAF teams, the tournament committee will notify the US Soccer Federation guidelines of disciplinary action taken, and that the Federation will transmit national association.</li>
                    </ol>
                </div>

                <div className="partitionTitle">CANCELLATIONS:</div>
                <div className="partitionText">
                    If the Tournament is cancelled due to events beyond the control of the Tournament Committee, the Tournament will not be required to make any financial remuneration.
                </div>

                <div className="partitionTitle">WAIVER:</div>
                <div className="partitionText">
                    By entering this tournament, every participant agrees to accept the jurisdiction of the Tournament Committee or its members, the Warrior Soccer Club, its Board of Trustees and employees, the three sites including WSC - Warrior Soccer Complex; CLD - Cloud Park; VAN - Vandalia/Stonequarry Park; and their respective employees/volunteers, the United States Soccer Federation, United States Youth Soccer Association, and United States Youth Soccer Association North in all matters of dispute. No official, coach, club, league, referee, player or their representative may invoke the aid of the Courts of any political or governmental entity without first exhausting all available remedies within the appropriate affiliated soccer organizations as set forth in these rules, the Constitution and Bylaws of the Warrior Soccer Club, the Constitution and Bylaws of the United States Soccer Federation, the Constitution and Bylaws of the United States Youth Soccer Association, and the Constitution and Bylaws of the Ohio South Youth Soccer Association. For violation of this rule, the offending party shall be subject for all expenses incurred by these associations and/or their officers, as appropriate, in defending each court action, including, but not limited to, court costs, attorney(s) fees and reasonable compensation for all time and expenses.
                </div>

                <div className="partitionTitle">GENERAL COMMENTS:</div>
                <div className="partitionText">
                    <ol>
                        <li>All teams are asked to clean up their team sidelines after each match. Thank you for your support with this effort.</li>
                        <li>In case a situation that may arise and is not addressed specifically in these rules, Tournament Committee's interpretation of the foregoing rules/regulations and unforeseen circumstances shall be final.</li>
                        <li>SCORES: Match and Score Reporting. Scores will be posted as quickly as possible. COACHES or a designated Team Administrator ONLY should report any discrepancies to Headquarters prior to their next game.</li>
                    </ol>
                </div>
            </div>

            <div id="faqs-div" className="partitionContainer">
            <div className="titleDiv">Application FAQs</div>
                <div className="partitionTitle">Do you have a paper application I can fill out?</div>
                <div className="partitionText">All applications are only accepted online at our web site. This will enable us to more accurately capture your team's data as well as reduce the time it takes to evaluate teams for acceptance after the application deadline. Our website has been a reliable tool for information, games schedules, and scores since our 2000 event and will continue to play a bigger role with each year.</div>
                <div className="partitionTitle">Do you want to check on the status of your team?</div>
                <div className="partitionText">Log in using your assigned team ID number (Like WSC123456789 or WFC 123456789) that was assigned to you when you registered. Go to the log in box under the Coaches tab in the left rail.</div>
                <div className="partitionTitle">How do I place my team in one division or the other?</div>
                <div className="partitionText">Your team will be placed in the division to be the most competitive with other teams that apply. However, you may help the selection committee by indicating your choice on the application form. Level 1-GOLD; Level 2-RED; Level 3-WHITE; & Level 4-BLUE divisions. If we only have 2 levels in an age group then only GOLD and RED will be used.</div>
                <div className="partitionTitle">When do I send travel permit?</div>
                <div className="partitionText">DO NOT SEND A TRAVEL PERMIT WITH YOUR APPLICATION. This is only required when/if your team is accepted. Travel permits are REQUIRED for all teams who are registered outside Ohio South (OSYSA) except for US Club Soccer that does not require travel permits. You should submit your Pre Registration travel permit with your on line registration items.</div>
                
                <div className="titleDiv">Bracketing/Team Selection FAQs</div>
                <div className="partitionTitle">Does the Classic have 2 divisions per age group?</div>
                <div className="partitionText">Depending on the number of teams in any given age group applying to the adidas Warrior Halloween Fall Soccer Classic, some age groups may consist of a Gold, Red, White divisions depending upon numbers. The Gold Division will be the upper division, Red is middle and White is lower. However, not all age groups will have 2 or 3 levels of play.</div>
                <div className="partitionTitle">Where and when will the schedules be posted?</div>
                <div className="partitionText">The schedule may be posted as early as the the first week in October. If you are listed as the contact for the team, you will be sent an email when the schedules are posted. You can access the game schedules, scores and photos by clicking on the GAMES/SCORES tab in the red menu across the top of any page OR by selecting your division in the drop down menu along the left side of any page on the site. You may also search by Club.</div>

                <div className="titleDiv">General FAQs</div>
                <div className="partitionTitle">Can US Youth Soccer players and coaches participate as a guest player or coach on a US Club team and vice versa?</div>
                <div className="partitionText">No. See US Youth Soccer Travel Procedure 7.12.1.</div>
                <div className="partitionTitle">How much does the tournament cost?</div>
                <div className="partitionText">The fees are posted on the front page, in the Facts At A Glance, to the left of the photo. Also posted there are the dates, location, deadline, etc.</div>
                <div className="partitionTitle">When I apply on line and I use Pay Pal for payment do I have to mail in a copy of my application?</div>
                <div className="partitionText">No. When you follow this procedure, the tournament will automatically receive a copy of your application and payment. If you do use Pay Pal, make sure you put on your WSC (spring tournament) or WFC (fall tournament) team number.</div>
                <div className="partitionTitle">Which field is XX division playing on?</div>
                <div className="partitionText">We do not have designated fields for each division. The fields are determined after we accept the teams, based on the number of teams per division and the available fields. Each venue has both small-sided and full-sized fields. If you are planning your hotel rooms based on your teams playing field, you should be aware that the fields are located centrally in the Greater Dayton area and most hotels are no more than 10-20 minutes away from any one venue. You should also be aware that hotels will fill up quickly. Booking early is perhaps far more important than booking a hotel close to the fields. Site Search is our official hotel organization.</div>
                
                <div className="titleDiv">Registration FAQs</div>
                <div className="partitionTitle">Can I register my team early if I have everything completed and so I do not have to attend registration on Friday night?</div>
                <div className="partitionText">There will be no Friday night registration. All registrations will be online for your convenience.</div>
                <div className="partitionTitle">Can we substitute the liability form with a generic one?</div>
                <div className="partitionText">NO!! You must use the liability release supplied with the acceptance packet</div>
                <div className="partitionTitle">Do I need to fill out of the Contact Form if I am local and not staying in a hotel?</div>
                <div className="partitionText">Yes, all teams MUST fill out and turn in this form. The form contains contact information the tournament may need to use during the tournament and it must be current and accurate.</div>
                <div className="partitionTitle">Does each team need a medical release form for all the players?</div>
                <div className="partitionText">While the tournament does not require that teams have a medical release form for each player, we highly recommend that they do have one and bring it with them.</div>
                <div className="partitionTitle">Does my team have to register on Friday night?</div>
                <div className="partitionText">There will be no Friday night registration. All registrations will be online for your convenience.</div>
                <div className="partitionTitle">I need to get duplicate forms and I have already confirmed. How to I do that?</div>
                <div className="partitionText">You will need your TEAM ID NUMBER (Like WSC123456789 you received with your Acceptance Form) to access the forms. When you log in, the system will tell you that your team has already been confirmed. There will be a link to the page that contains the duplicate forms.</div>
                <div className="partitionTitle">When are my Guest Players due?</div>
                <div className="partitionText">You may add guest players up until night before the tournament.</div>
                <div className="partitionTitle">When is my roster frozen?</div>
                <div className="partitionText">Your roster is frozen on the Friday before the weekend tournament.</div>
                <div className="partitionTitle">Where can I find the forms I need?</div>
                <div className="partitionText">Enter your WSC assigned number, then click on forms and select the form you need.</div>
            </div>
        </div>
    </div>);
}

export default RulesFAQs;