package com.ser515.backend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "team")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "team_id")
    private Integer teamId;

    @Column(name = "team_name")
    private String teamname;

    @Column(name = "coach_id")
    private Integer coachId;

    @Column(name = "coach_name")
    private String coachName;

    @Column(name = "coach_email")
    private String coachEmail;

    @Column(name = "contact_number")
    private String contactNumber;

    @Column(name = "age_group")
    private String ageGroup;

    @Column(name = "min_age")
    private Integer minAge;

    @Column(name = "max_age")
    private Integer maxAge;

    @Column(name = "gender")
    private String gender;

    @Column(name = "is_approved")
    private String isApproved;
}
