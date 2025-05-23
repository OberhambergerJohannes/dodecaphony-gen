import React from 'react';
import Header from './components/Header.jsx';
import TopSection from './components/TopSection.jsx';
import DownloadButtons from './components/DownloadButtons.jsx';
import CustomizeSection from './components/CustomizeSection.jsx';
import Footer from './components/Footer.jsx';
import PieceDisplayContainer from "./components/PieceDisplayContainer.jsx";

function App() {
    return (
        <>
            <Header/>
            <TopSection/>
            <PieceDisplayContainer/>
            <DownloadButtons/>
            <CustomizeSection/>
            <Footer/>
        </>
    )
}

export default App;