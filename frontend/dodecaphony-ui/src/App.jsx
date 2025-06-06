import React from 'react';
import Header from './components/Header.jsx';
import TopSection from './components/TopSection.jsx';
import CustomizeSection from './components/CustomizeSection.jsx';
import Footer from './components/Footer.jsx';
import Container from "./components/Container.jsx";

function App() {
    return (
        <>
            <Header/>
            <TopSection/>
            <Container/>
            <CustomizeSection/>
            <Footer/>
        </>
    )
}
export default App;