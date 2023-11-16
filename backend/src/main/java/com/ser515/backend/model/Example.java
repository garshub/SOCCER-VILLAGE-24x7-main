package com.ser515.backend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "example")
public class Example {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;
}
