import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "./AdminContainer.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TournamentDirector from "./TournamentDirector";
import TeamDirector from "./TeamDirector";
import FieldDirector from "./FieldDirector";
import RefereeDirector from "./RefereeDirector";

export const TournamentContainer = (props) => {
    return (
        <Router>
            <div className={styles.App}>
                <nav className="navbar navbar-expand navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/admin"}>
                            Soccer Village 24x7 Admin Portal
                        </Link>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarTogglerDemo02"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/admin/referee"}>
                                        Referee Portal
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/admin/team"}>
                                        Team Portal
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={"/admin/field"}
                                    >
                                        Field Portal
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact
                        path="/admin"
                        component={TournamentDirector}
                    />
                    <Route exact path="/admin/referee"
                        component={RefereeDirector}
                    />
                    <Route exact path="/admin/team"
                        component={TeamDirector}
                    />
                    <Route exact path="/admin/field"
                        component={FieldDirector}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export const TeamContainer = (props) => {
    return (
        <Router>
            <div className={styles.App}>
                <nav className="navbar navbar-expand navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/teamDirector"}>
                            Soccer Village 24x7 Team Director Portal
                        </Link>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/teamDirector"
                        component={TeamDirector}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export const FieldContainer = (props) => {
    return (
        <Router>
            <div className={styles.App}>
                <nav className="navbar navbar-expand navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/fieldDirector"}>
                            Soccer Village 24x7 Field Director Portal
                        </Link>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/fieldDirector"
                        component={FieldDirector}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export const RefereeContainer = (props) => {
    return (
        <Router>
            <div className={styles.App}>
                <nav className="navbar navbar-expand navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/refereeDirector"}>
                            Soccer Village 24x7 Referee Director Portal
                        </Link>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/refereeDirector"
                        component={RefereeDirector}
                    />
                </Switch>
            </div>
        </Router>
    );
}
