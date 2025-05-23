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

    return <PieceDisplay abcString={abcString} loading={loading} zoom={1.0} />;
}
