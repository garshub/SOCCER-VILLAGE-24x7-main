package com.ser515.backend.utils;

public enum RoleCode {

    COACH("CH"),
    PLAYER("PL"),
    REFREE("RF"),
    VOLUNTEER("VL"),
    SPONSOR("SP"),
    ADMIN("AD"),
    TOURNAMENTDIRECTOR("TD"),
    TEAMDIRECTOR("TR"),
    REFEREEDIRECTOR("RD"),
    FIELDDIRECTOR("FD"),
    VOLUNTEERDIRECTOR("VD"),
    HOSTCOACH("HC");

    public final String roleCode;

    RoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getRoleCode() {
        return roleCode;
    }
}
