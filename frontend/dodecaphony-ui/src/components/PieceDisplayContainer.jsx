import React, {useState, useEffect, forwardRef} from "react";
import PieceDisplay from './PieceDisplay.jsx';
import DownloadButtons from './DownloadButtons.jsx';

/**
 * responsible for loading
 * @returns {Element}
 * @constructor
 */
const PieceDisplayContainer = forwardRef((props, ref) => {
    const [abcString, setAbcString] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/melody")
            .then(res => res.text())
            .then(data => {
                setAbcString(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <PieceDisplay ref={ref} abcString={abcString} loading={loading} zoom={1.0}/>
    );
});
export default PieceDisplayContainer;