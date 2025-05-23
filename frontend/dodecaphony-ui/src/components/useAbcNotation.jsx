import {useEffect, useRef} from "react";
import abcjs from "abcjs";


/**
 * a custom hook for rendering abc-Notation in a Dom element
 * @param abcString music notes as String
 * @param loading state of loading music notes
 * @returns {React.RefObject<null>} music note container element
 */
export default function useAbcNotation(abcString, loading){
    const containerRef = useRef(null);

    useEffect(() => {
        if(!loading && abcString && containerRef.current){
            containerRef.current.innerHTML = ""; //clear
            //rendering abc notation
            abcjs.renderAbc(containerRef.current, abcString, {
                responsive: "resize"
            });
        }
    }, [abcString, loading]);
    return containerRef;
}