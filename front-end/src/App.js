import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import SchedulerForm from "./SchedulerForm";
import LandingPage from "./LandingPage";
import GameSchedule from "./GameSchedule";
import TeamRegistration from "./TeamRegistration";
import RulesFAQs from "./RulesFAQs";
import RegisterReferee from "./RegisterReferee";
import {TournamentContainer, TeamContainer, FieldContainer, RefereeContainer} from "./AdminContainer";

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}>
                            Soccer Village 24x7
                        </Link>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarTogglerDemo02"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/schedule"}>
                                        Schedule a Tournament
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={"/createTeam"}
                                    >
                                        Register a Team
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/faqs"}>
                                        Rules and FAQs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={"/RegisterReferee"}
                                    >
                                        Register as a Referee
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/landingPage" component={LandingPage} />
                    <Route path="/schedule" component={SchedulerForm} />
                    <Route path="/gameSchedule" component={GameSchedule} />
                    <Route path="/createTeam" component={TeamRegistration} />
                    <Route path="/faqs" component={RulesFAQs} />
                    <Route
                        path="/registerReferee"
                        component={RegisterReferee}
                    />
                    <Route
                        path="/admin"
                        component={TournamentContainer}
                    />
                    <Route exact path="/refereeDirector"
                        component={RefereeContainer}
                    />
                    <Route exact path="/teamDirector"
                        component={TeamContainer}
                    />
                    <Route exact path="/fieldDirector"
                        component={FieldContainer}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
