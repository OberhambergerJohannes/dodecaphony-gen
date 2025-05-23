package at.jku.multimedia.dodecaphonybackend;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Dodecaphony {
    private final Sequence sequence;
    private static final Map<Integer, String> notes = new HashMap<>() {
        {
            put(1, "c");
            put(2, "cis");
            put(3, "d");
            put(4, "dis");
            put(5, "e");
            put(6, "f");
            put(7, "fis");
            put(8, "g");
            put(9, "gis");
            put(10, "a");
            put(11, "b");
            put(12, "h");
            put(13, "c1");
            put(14, "cis1");
            put(15, "d1");
            put(16, "dis1");
            put(17, "e1");
            put(18, "f1");
            put(19, "fis1");
            put(20, "g1");
            put(21, "gis1");
            put(22, "a1");
            put(23, "b1");
            put(24, "h1");
        }

    };

    Dodecaphony() {
        this.sequence = new Sequence(Sequence.generateBasicSequence());
    }

    public String[] getMelody() {
        String[] melody = new String[36];
        System.arraycopy(getBasicPart(), 0, melody, 0, 12);
        System.arraycopy(getReversedPart(), 0, melody, 12, 12);
        System.arraycopy(getIntervalPart(), 0, melody, 24, 12);
        return melody;
    }

    private String[] getBasicPart() {
        return numbersToNotes(sequence.getBasicSequence());
    }

    private String[] getReversedPart() {
        System.out.println(Arrays.toString(sequence.getReversedSequence()));
        return numbersToNotes(sequence.getReversedSequence());
    }

    private String[] getIntervalPart() {
        return numbersToNotes(sequence.getReversedIntervallSequence());
    }

    private String[] numbersToNotes(int[] numbers) {
        String[] notes = new String[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            notes[i] = this.notes.get(numbers[i]);
        }
        return notes;
    }
}

