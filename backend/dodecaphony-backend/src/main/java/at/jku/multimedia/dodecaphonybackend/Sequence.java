package at.jku.multimedia.dodecaphonybackend;

import java.util.*;

public class Sequence {
    private int[] basicSequence;
    private static Integer[] orderedSequence = new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};

    Sequence(int[] basicSequence) {
        this.basicSequence = basicSequence;

    }

    public static int[] generateBasicSequence() {
        List<Integer> basic = new ArrayList<Integer>(Arrays.asList(orderedSequence));
        Collections.shuffle(basic);
        int[] basicSequence = new int[basic.size()];
        for (int i = 0; i < basic.size(); i++) {
            basicSequence[i] = basic.get(i);
        }
        return basicSequence;
    }

    public int[] getBasicSequence() {
        return basicSequence;
    }

    public int[] getReversedSequence() {
        int[] reversedSequence = new int[basicSequence.length];
        for (int i = 0; i < basicSequence.length; i++) {
            reversedSequence[i] = basicSequence[basicSequence.length - 1 - i];
        }
        return reversedSequence;
    }

    public int[] getReversedIntervallSequence() {
        int[] reversedIntervalSequence = new int[basicSequence.length];
        reversedIntervalSequence[0] = basicSequence[0];
        for (int i = 1; i < basicSequence.length; i++) {
            int interval = basicSequence[i - 1] - basicSequence[i];

            reversedIntervalSequence[i] = (reversedIntervalSequence[i - 1] + interval) % 24;
            if (reversedIntervalSequence[i] <= 0) {
                reversedIntervalSequence[i] += 24;
            }
        }
        return reversedIntervalSequence;
    }
}
