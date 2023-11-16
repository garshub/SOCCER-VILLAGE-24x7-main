package com.ser515.backend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "player")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "player_id")
    private int playerID;

    @Column(name = "team_id")
    private long teamId;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "age")
    private int age;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email")
    private String email;

}
