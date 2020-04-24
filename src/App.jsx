import React from 'react';
import './styles/index.scss';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="main-container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
