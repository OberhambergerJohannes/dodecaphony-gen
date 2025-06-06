import React, { useRef } from 'react';
import PieceDisplayContainer from './PieceDisplayContainer';
import DownloadButtons from './DownloadButtons';
import MusicPlayer from "./MusicPlayer.jsx";
import jsPDF from 'jspdf';
import 'svg2pdf.js';


function Container() {
    const pieceDisplayRef = useRef(null);

    const handleDownloadWAV = () => {
        pieceDisplayRef.current.downloadWav();
    };

    const handleDownloadPDF = () => {
        const svgElement = pieceDisplayRef.current.getSVG();
        if (!svgElement) return;

        const svgString = new XMLSerializer().serializeToString(svgElement);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new window.Image();
        const svg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgString)));

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'pt',
                format: [img.width, img.height]
            });
            pdf.addImage(imgData, 'PNG', 0, 0, img.width, img.height);
            pdf.save('music.pdf');
        };
        img.src = svg;
    };

    const handleDownloadHTML = () => {
        const svgElement = pieceDisplayRef.current.getSVG();
        if (!svgElement) return;

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Music Sheet</title>
        </head>
        <body>
            ${svgElement.outerHTML}
        </body>
        </html>
    `;
        const blob = new Blob([htmlContent], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = "music-sheet.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <PieceDisplayContainer ref={pieceDisplayRef} />
            <MusicPlayer/>
            <DownloadButtons onDownloadWAV={handleDownloadWAV} onDownloadPDF={handleDownloadPDF} onDownloadHTML={handleDownloadHTML}/>
        </>
    );
}
export default Container;
