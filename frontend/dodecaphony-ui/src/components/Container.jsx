import React, { useRef } from 'react';
import PieceDisplayContainer from './PieceDisplayContainer';
import DownloadButtons from './DownloadButtons';
import MusicPlayer from "./MusicPlayer.jsx";

/*
Container component encapsulating PieceDisplayContainer, MusicPlayer and DownloadButtons to make them interoperable
 */
function Container() {
    const pieceDisplayRef = useRef(null);

    const handleDownloadWAV = () => {
        pieceDisplayRef.current.downloadWav();
    };

    return (
        <>
            <PieceDisplayContainer ref={pieceDisplayRef} />
            <MusicPlayer/>
            <DownloadButtons onDownloadWAV={handleDownloadWAV} />
        </>
    );
}
export default Container;
