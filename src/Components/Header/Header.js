import React from 'react'
import {ReactComponent as CadeadoIcon} from '../Assets/cadeado.svg'
import {ReactComponent as TrocaIcon} from '../Assets/troca.svg'
import {ReactComponent as PorcentagemIcon} from '../Assets/porcentagem.svg'
import {ReactComponent as EntregaIcon} from '../Assets/entrega.svg'
import {ReactComponent as Logo} from '../Assets/logo.svg'
import {ReactComponent as SearchIcon} from '../Assets/search.svg'
import {ReactComponent as WhatsIcon} from '../Assets/whatsapp.svg'
import {ReactComponent as AvatarIcon} from '../Assets/avatar.svg'
import {ReactComponent as SetaMenuIcon} from '../Assets/seta.svg'
import {ReactComponent as BagIcon} from '../Assets/bag.svg'



export default function Header ()  {

    return (
        <header className="header">
          <div className="header__advantages">
             <div className="container d-flex-between">
                <div className="header__advantages__content">
                   <CadeadoIcon className="header__advantages__content_svg"/> 
                   <h4>COMPRA 100%</h4>
                 </div> |
                 <div className="header__advantages__content">
                    <TrocaIcon className="header__advantages__content_svg"/>
                    <h4>1ª TROCA GRÁTIS</h4>
                 </div> |
                 <div className="header__advantages__content">
                     <PorcentagemIcon className="header__advantages__content_svg"/>
                    <h4>5X SEM JUROS</h4>
                 </div> |
                 <div className="header__advantages__content">
                    <EntregaIcon className="header__advantages__content_svg"/>
                    <h4>ENTREGAS EM TODO O BRASIL</h4>
                 </div>
              </div>
           </div>
           
           {/* INICIO MENU CENTRAL */}
           <div className="header__menuCenter"> 
             <div className="container d-flex-between  p-relative">
               <div className="header__menuCenter__logo">
                   <Logo alt="Logotipo loja ninja som"/>
                </div>
                <form className="header__menuCenter__search">
                  <input placeholder="BUSQUE AQUI..."/>
                  <SearchIcon/>
                 </form>
                 <div className="header__menuCenter__contact">
                     <WhatsIcon/>
                      <h4>(11) 99999-9999</h4>
                  </div>
                  <button className="header__menuCenter__account" href="/">    
                  <AvatarIcon/>
                  <div className="header__menuCenter__account__button">
                     <h4>OLÁ, VISITANTE <SetaMenuIcon/></h4>
                     <h5>MINHA CONTA</h5>
                  </div>
                  </button>
                  <button className="header__menuCenter__cart">
                     <BagIcon/>
                     <h5>SEU CARRINHO</h5>
                     <h4>0 item (s)</h4>
                    </button>          
              </div>
                  
           </div>
           {/* FIM MENU CENTRAL */}

           {/* INICIO MENU NAVEGACAO */}
           <nav className="header__menuNav">
             <div className="container">
               <ul className="header__menuNav__categories">
                  <li>
                     <a href="/">TODAS AS CATEGORIAS <SetaMenuIcon/> </a>
                  </li>
                  <li>
                     <a href="/">SOM PROFISSIONAL <SetaMenuIcon/></a>
                  </li>
                  <li>
                     <a href="/">INSTRUMENTOS MUSICAIS <SetaMenuIcon/></a>
                  </li>
                  <li>
                     <a href="/">PROMOÇÕES</a>
                  </li>
                  <li>
                     <a href="/">CONTATO</a>
                  </li>
               </ul>
             </div>
           </nav>
           
           
        </header>
    )
}