package com.ser515.backend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "coach")
public class Coach {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer coachId;

    @Column(name = "team_id")
    private int teamId;

    @Column(name = "coach_name")
    private String coachName;

}
