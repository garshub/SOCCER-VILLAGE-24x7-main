package com.ser515.backend.scheduler;

import java.util.List;

public class InputScheduler {
    public static List<Integer> input(List<Integer> teams) {
        int n = teams.size();
        int[] groupA = new int[n / 2];
        int[] groupB = new int[n / 2];
        for (int i = 0, j = n / 2; i <= n / 2 && j <= n; i++, j++) {
            groupA[i] = teams.get(i);
            groupB[i] = teams.get(j);
        }
        return null;


    }
}
