import React from 'react';
import {ReactComponent as Arrow} from '../../../Assets/arrow.svg'
import {ReactComponent as FecharIcon} from '../../../Assets/fechar.svg'


export default function Modal ({setShowModal, title, description, price, img}) {


    function closeModal() {
        setShowModal(false)
    }

    return (
        <div className="modalcontainer">
            <div className="modalcontainer__modal">
               <div className="modalcontainer__modal__img">
                  <img alt={title} src={img}/>
               </div>
               <div className="modalcontainer__modal__infos">
                    <h1 className="modalcontainer__modal__infos__title">
                        {title}
                    </h1>
                    <h2 className="modalcontainer__modal__infos__price">{price}</h2>
                    <p  className="modalcontainer__modal__infos__description">
                      {description}
                    </p>
                    <span>
                        <h4 className="modalcontainer__modal__infos__details">
                         Veja mais detalhes do produto 
                         </h4>
                         <Arrow/>
                      </span>
                    <button className="modalcontainer__modal__infos__button">Adicionar ao carrinho</button>
               </div>
               <button onClick={closeModal} className="modalcontainer__modal__infos__buttonfechar"><FecharIcon/></button>
            </div>
        </div>
    )
}