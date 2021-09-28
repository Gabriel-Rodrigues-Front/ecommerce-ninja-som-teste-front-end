import React from 'react';
import banner1 from '../Assets/banner1.png'
import banner2 from '../Assets/banner2.jpg'

import {ReactComponent as ArrowLeft} from '../Assets/setaesquerda.svg'
import {ReactComponent as ArrowRight} from '../Assets/setadireita.svg'
import {ReactComponent as SliderIndicator} from '../Assets/indicadorSlider.svg'



export default function Slider () {
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();


    const imagens = [
        {
            id: 1,
            src: banner1,
            alt:'mulher tocando guitarra'
        },
        {
            id: 2,
            src: banner2,
            alt:'guitarra'
        }
    ]

    React.useEffect(() => {
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition(- (width * active));
    }, [active]);

    function slidePrev() {
        if(active === 0) return null
        setActive(active - 1);
    }

    function slideNext() {
        if(active === imagens.length - 1) {
            setActive(0)
        } else {
            setActive(active + 1);
         }     
        }

        setTimeout(() => {
            slideNext()
        }, 3000)
       
    

    return (
        <div className="slider">
            <button onClick={slidePrev} className="slider__arrow-left">
                <ArrowLeft/>
            </button>
            <button onClick={slideNext} className="slider__arrow-right">
                <ArrowRight/>
            </button>

            <div ref={contentRef} style={{transform:`translateX(${position}px)`}} className="slider__content">
            {imagens.map(imagem => (
                <img alt={imagem.alt} key={imagem.id} className="slider__content__img" src={imagem.src}/>
            ))}
            </div>
            <div className="slider__balls">
                {imagens.map((imagem, index) => (
                    <SliderIndicator key={index}
                    style={{
                        background: `${index  === active ? '#fff' : 'none'}`,
                        borderRadius: '50%',
                        margin:'0 3px',
                        cursor: 'pointer'
                    }}
                    onClick={() => setActive(index)}
                    />
                ))}
            </div>
        </div>
    )
}