import React, {useEffect, useRef, useState} from 'react';
import Stars from '../../../assets/stars.png'
import Moon from '../../../assets/moon.png'
import MountainsBehind from '../../../assets/mountains_behind.png'
import MountainsFront from '../../../assets/mountains_front.png'
import './Jumbotron.scss';

type JumbotronProps = {
    id: string;
}
function Jumbotron(props: JumbotronProps) {
    const stars = useRef(document.createElement("img"));
    const moon = useRef(document.createElement("img"));
    const mountains_behind = useRef(document.createElement("img"));
    const mountains_front = useRef(document.createElement("img"));
    const jumbotron_title = useRef(document.createElement("h1"));
    const jumbotron_button = useRef(document.createElement("a"));
    const [windowY, setWindowY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let value = window.scrollY
            setWindowY(value)
            stars.current.style.left = value * 0.25 + 'px';
            moon.current.style.top = value * 1.05 + 'px';
            mountains_behind.current.style.top = value * 0.5 + 'px';
            mountains_front.current.style.top = 0 + 'px';
            jumbotron_title.current.style.marginRight = value * 4 + 'px';
            jumbotron_button.current.style.marginTop = value * 1.5 + 'px';
        });
    }, [windowY]);

    return (
        <section>
            <img src={Stars} alt={"stars"} id={'stars'} ref={stars}/>
            <img src={Moon} alt={"moon"} id={'moon'} ref={moon}/>
            <h1 id={'jumbotron-title'} ref={jumbotron_title}>Weiduo & Peiyu</h1>
            <a id={'jumbotron-button'} href={'/#'} ref={jumbotron_button}>Explore</a>
            <img src={MountainsBehind} alt={"mountains behind"} id={'mountains-behind'} ref={mountains_behind}/>
            <img src={MountainsFront} alt={"mountains front"} id={'mountains-front'} ref={mountains_front}/>
        </section>
    );
}

export default Jumbotron;
