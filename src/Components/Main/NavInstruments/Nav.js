import React from 'react'

import Guitarras from '../../Assets/guitarras.png'
import Microfones from '../../Assets/microfones.png'
import Mesasom from '../../Assets/mesasom.png'
import Teclados from '../../Assets/teclados.png'
import Violao from '../../Assets/violao.png'
import Baterias from '../../Assets/baterias.png'

export default function Nav () {

    return (
        <nav className='navMain container'>
            <ul className='navMain__content'>
                <li className='navMain__content__instrument'>
                    <a className='navMain__content__instrument__link navMain__content__instrument__link--fade' href="/">
                      <div>
                        <img className='navMain__content__instrument__link__img' alt="Guitarra" src={Guitarras}/>
                       </div>
                      <h4>GUITARRAS</h4> 
                    </a>
                </li>
                <li className='navMain__content__instrument'>
                    <a className='navMain__content__instrument__link navMain__content__instrument__link--fade' href="/">
                      <div>
                        <img className='navMain__content__instrument__link__img' alt="Guitarra" src={Microfones}/>
                       </div>
                      <h4>MICROFONES</h4> 
                    </a>
                </li>
                <li className='navMain__content__instrument'>
                    <a className='navMain__content__instrument__link navMain__content__instrument__link--fade' href="/">
                      <div>
                        <img className='navMain__content__instrument__link__img' alt="Guitarra" src={Mesasom}/>
                       </div>
                      <h4>MESA DE SOM</h4> 
                    </a>
                </li>
                <li className='navMain__content__instrument'>
                    <a className='navMain__content__instrument__link navMain__content__instrument__link--fade' href="/">
                      <div>
                        <img className='navMain__content__instrument__link__img' alt="Guitarra" src={Teclados}/>
                       </div>
                      <h4>TECLADOS</h4> 
                    </a>
                </li>
                <li className='navMain__content__instrument'>
                    <a className='navMain__content__instrument__link navMain__content__instrument__link--fade' href="/">
                      <div>
                        <img className='navMain__content__instrument__link__img' alt="Guitarra" src={Violao}/>
                       </div>
                      <h4>VIOLÃO</h4> 
                    </a>
                </li>
                <li className='navMain__content__instrument'>
                    <a className='navMain__content__instrument__link navMain__content__instrument__link--fade' href="/">
                      <div>
                        <img className='navMain__content__instrument__link__img' alt="Guitarra" src={Baterias}/>
                       </div>
                      <h4>BATERIAS</h4> 
                    </a>
                </li>
            </ul>
        </nav>
    )
}