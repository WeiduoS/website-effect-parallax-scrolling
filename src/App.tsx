import React, {useEffect, useRef} from 'react';
// import logo from './logo.svg';
import './App.scss';
// import Section from "./components/section/Section";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Section from "./components/section/Section";

function App() {

    const about_button = useRef(document.createElement("a"));

    useEffect(() => {
        // about_button.current.scrollIntoView({ behavior: "smooth", block: "start"})
    }, [])

    return (
        <div>
            <header className="App-header">
                <a href={'/#'} className={'logo'}>WS</a>
                <ul>
                    <li><a href={'/#'} className={'active'}> Home </a></li>
                    <li><a href={'/#about-section'} ref={about_button} id={'about'}> About </a></li>
                    <li><a href={'/#'}> Work </a></li>
                    <li><a href={'/#'}> Contract </a></li>
                </ul>
            </header>
            <Jumbotron id={'jumbotron'}></Jumbotron>
            <Section></Section>
        </div>
    );
}

export default App;
