import React from 'react';
import Header from './components/Header.jsx';
import PieceDisplay from './components/PieceDisplay.jsx';
import TopSection from './components/TopSection.jsx';
import DownloadButtons from './components/DownloadButtons.jsx';
import CustomizeSection from './components/CustomizeSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <>
            <Header/>
            <TopSection/>
            <PieceDisplay/>
            <DownloadButtons/>
            <CustomizeSection/>
            <Footer/>
        </>
    )
}

export default App;