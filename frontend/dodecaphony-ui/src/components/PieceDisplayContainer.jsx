import React, {useState, useEffect} from "react";
import PieceDisplay from './PieceDisplay.jsx';

/**
 * responsible for loading
 * @returns {Element}
 * @constructor
 */
export default function PieceDisplayContainer() {
    const [abcString, setAbcString] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //simulated fetch and fix example of the abcString todo implement
        setTimeout(() => {
            setAbcString(`
X:1
T:Simple Scale
M:4/4
L:1/4
K:C
C D E F | G A B c |
`);
            setLoading(false);
        }, 1000);
    }, []);

    return <PieceDisplay abcString={abcString} loading={loading}/>;
}