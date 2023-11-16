package com.ser515.backend.model;

import java.sql.Date;

public class UserDetailsDto {

    private long uid;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String streetAddress;
    private String city;
    private String state;
    private String country;
    private String pin;
    private Date dob;
    private String role;
    private String roleCode;
    private String password;

    public UserDetailsDto(UserDetails user) {
        this.uid = user.getUid();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
        this.streetAddress = user.getStreetAddress();
        this.city = user.getCity();
        this.state = user.getState();
        this.country = user.getCountry();
        this.pin = user.getPin();
        this.dob = user.getDob();
        this.role = user.getRole();
        this.roleCode = user.getRoleCode();
        this.password = user.getPassword();
    }

    public long getUid() {
        return uid;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }

    public String getPin() {
        return pin;
    }

    public Date getDob() {
        return dob;
    }

    public String getRole() {
        return role;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public String getPassword() {
        return password;
    }
}
