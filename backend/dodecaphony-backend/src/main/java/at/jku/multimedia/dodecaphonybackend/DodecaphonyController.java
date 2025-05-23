package at.jku.multimedia.dodecaphonybackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DodecaphonyController {

    private final Dodecaphony dodecaphony = new Dodecaphony();

    @GetMapping("/melody")
    public String getMelody() {
        String[] tokens = dodecaphony.getMelody();
        return "X:1\nT:Auto-generated melody\nM:C\nL:1/4\nK:C\n" + String.join(" ", tokens);
    }
}
