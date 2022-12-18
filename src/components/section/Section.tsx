import React, {useEffect, useRef} from 'react';
import './Section.scss'


type SectionProps = {
    // id: string;
}
function Section(props: SectionProps) {

    const sec = useRef(document.createElement("div"));

    useEffect(() => {
        // sec.current.scrollIntoView({ behavior: "smooth", block: "start"})
        // let element = document.getElementById('about-section');
        // element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [])



    return (
        <div className={'sec'} id={'about-section'} ref={sec}>
            <h2>Parallax Scrolling Effects</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie velit libero, sed condimentum
                nisl tempor nec. Sed placerat lorem sit amet libero feugiat maximus. Suspendisse potenti. Mauris
                lobortis eu diam a tristique. Sed et nibh in metus mattis sagittis eu et dolor. Vivamus scelerisque nibh
                id efficitur placerat. Morbi pharetra fermentum ex nec tempus. Phasellus posuere pretium orci vitae
                posuere. Proin sit amet hendrerit turpis. Aenean eget tempus nulla.
            </p>
            <p>
                Sed facilisis vestibulum est, sed pharetra nisl luctus sed. Praesent orci libero, tincidunt accumsan
                turpis at, euismod faucibus nibh. Aliquam erat volutpat. Sed malesuada pretium laoreet. Proin rutrum
                ligula neque, viverra iaculis sapien eleifend quis. Nullam ullamcorper quam diam, vel rhoncus neque
                aliquam at. Praesent interdum vitae tortor ut dapibus. Pellentesque in hendrerit nibh. Maecenas porta
                sapien eget lobortis malesuada.
            </p>
            <p>
                Pellentesque iaculis enim nulla, et rhoncus magna sollicitudin in. Aenean sodales dui quis pretium
                faucibus. Maecenas ac erat nulla. Ut eleifend nisi gravida enim pharetra, eu malesuada justo commodo. In
                ac mi sagittis, dictum diam sed, gravida arcu. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Aenean dignissim massa eros, vel viverra justo ullamcorper vel. Praesent
                tellus sapien, vestibulum id scelerisque sit amet, ullamcorper vel turpis. Integer feugiat arcu eu
                rutrum pharetra. Donec faucibus, erat et egestas tempor, sapien risus efficitur ante, nec fringilla leo
                nisi ac turpis. In consectetur urna nec laoreet faucibus. Nam aliquet sem eu mi mattis, quis facilisis
                lacus sodales.
            </p>
            <p>
                Donec vel lacus ac sapien dignissim auctor quis in risus. Vivamus in ante suscipit, laoreet felis ut,
                faucibus neque. Cras eleifend ac diam et fermentum. Morbi posuere rhoncus erat sed mattis. Phasellus sit
                amet metus nisi. Etiam cursus eros at urna sodales, ut tempus ex congue. Aliquam leo est, porttitor non
                hendrerit quis, faucibus sed neque. Duis sit amet venenatis lacus. Suspendisse mi enim, dictum maximus
                condimentum sed, porta in velit. Donec et mi consectetur, facilisis sapien ac, fringilla turpis. In ac
                tellus sit amet massa lacinia viverra. Nulla sed massa arcu. Nulla egestas ipsum justo, a porta leo
                tincidunt quis.
            </p>
            <p>
                Sed id mauris egestas, pretium ex ac, vestibulum elit. Etiam ultricies tincidunt nulla, nec lobortis
                magna aliquam ut. Vivamus a semper leo. Vestibulum vel pharetra massa. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Phasellus commodo, metus eu rutrum imperdiet, urna
                quam tristique lectus, vitae placerat mauris elit sit amet dolor. Mauris sed leo orci. Duis id porta
                nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
                pharetra consequat lorem, fringilla commodo purus tempor sed. Nullam eget justo ut tellus varius
                imperdiet vitae ac orci.
            </p>
        </div>
    );
}

export default Section;
