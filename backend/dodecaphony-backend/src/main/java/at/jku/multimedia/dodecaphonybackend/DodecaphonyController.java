package at.jku.multimedia.dodecaphonybackend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DodecaphonyController {

    @GetMapping("/melody")
    public String getMelody() {
        Dodecaphony dodecaphony = new Dodecaphony();
        String[] tokens = dodecaphony.getMelody();
        return "X:1\nT:Your Personal Dodecaphony Piece\nM:C\nL:1/4\nK:C\n" + String.join(" ", tokens);
    }
}
