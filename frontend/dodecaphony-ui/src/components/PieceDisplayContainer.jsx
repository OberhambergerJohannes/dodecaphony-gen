import React, { useState, useEffect, forwardRef } from "react";
import PieceDisplay from './PieceDisplay.jsx';
import TopSection from './TopSection.jsx';

const PieceDisplayContainer = forwardRef((props, ref) => {
    const [abcString, setAbcString] = useState("");
    const [loading, setLoading] = useState(true);
    const [regenerate, setRegenerate] = useState(false);

    useEffect(() => {
        setLoading(true);
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
    }, [regenerate]);

    const handleRegenerate = () => setRegenerate(r => !r);

    return (
        <>
            <TopSection onRegenerate={handleRegenerate} />
            <PieceDisplay ref={ref} abcString={abcString} loading={loading} zoom={1.0}/>
        </>
    );
});
export default PieceDisplayContainer;