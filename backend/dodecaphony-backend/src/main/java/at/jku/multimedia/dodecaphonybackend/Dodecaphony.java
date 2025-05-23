package at.jku.multimedia.dodecaphonybackend;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Dodecaphony {
    private final Sequence sequence;
    private static final Map<Integer, String> notes = new HashMap<>() {{
        put(1, "C");
        put(2, "^C");
        put(3, "D");
        put(4, "^D");
        put(5, "E");
        put(6, "F");
        put(7, "^F");
        put(8, "G");
        put(9, "^G");
        put(10, "A");
        put(11, "_B");
        put(12, "B");
        put(13, "c");
        put(14, "^c");
        put(15, "d");
        put(16, "^d");
        put(17, "e");
        put(18, "f");
        put(19, "^f");
        put(20, "g");
        put(21, "^g");
        put(22, "a");
        put(23, "_b");
        put(24, "b");
    }};


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

