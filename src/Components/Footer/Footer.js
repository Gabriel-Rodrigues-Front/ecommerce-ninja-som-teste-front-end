import React from 'react'
import VisaIcon from '../Assets/visa.png'
import Master from '../Assets/master.png'
import American from '../Assets/american.png'
import Dinner from '../Assets/dinner.png'
import Boleto from '../Assets/boleto.png'
import VtexCertified from '../Assets/vtexcertified.png'
import SSL from '../Assets/ssl.png'
import {ReactComponent as EconverseLogo} from '../Assets/econverselogo.svg'
import VtexLogo from '../Assets/vtexlogo.png'

export default function Footer () {


    return (
        <footer className="footer">
           <div className=" container footer__top">
               <div className="box">
                  <div className="footer__top__instituition">
                    <h4 className="footer__top__instituition__title">INSTITUCIONAL</h4>
                    <a href="/" className="footer__top__instituition__link">QUEM SOMOS</a>
                    <a href="/" className="footer__top__instituition__link">NOSSAS LOJAS</a>
                   </div>
                   <div className="footer__top__contact">
                    <h4 className="footer__top__contact__title">ATENDIMENTO</h4>
                    <a href="/" className="footer__top__contact__link">FALE CONOSCO</a>
                    <a href="/" className="footer__top__contact__link">VENDAS@NINJASOM.COM.BR</a>
                   </div>
               </div>

               <div className="footer__top__help">
                   <h4 className="footer__top__help__title">AJUDA E SUPORTE</h4>
                   <a href="/" className="footer__top__help__link">POLÍTICA DE PRIVACIDADE</a>
                   <a href="/" className="footer__top__help__link">POLÍTICA DE TROCA</a>
                   <a href="/" className="footer__top__help__link">PRAZOS DE ENTREGA</a>
                   <a href="/" className="footer__top__help__link">TERMOS DE USO</a>
                </div>


              <div className="box">  
                    <div className="footer__top__payment">
                        <h4 className="footer__top__payment__title">FORMAS DE PAGAMENTO</h4>
                        <div className="footer__top__payment__brands">
                            <img alt="forma de pagamento cartão Visa" src={VisaIcon}/>
                            <img alt="forma de pagamento cartão Mastercard" src={Master}/>
                            <img alt="forma de pagamento cartão American Express" src={American}/>
                            <img alt="forma de pagamento cartão Dinner Club" src={Dinner}/>
                            <img alt="forma de pagamento Boleto" src={Boleto}/>
                        </div>
                    </div>
                    <div className="footer__top__security">
                        <h4 className="footer__top__security__title">SEGURANÇA</h4>
                        <div className="footer__top__security__brands">
                            <img alt="Certificado de segurança SSL" src={SSL}/>
                            <img alt="Certificado de segurança vtex" src={VtexCertified}/>
                         </div>
                    </div>
              </div>

              <div className="footer__top__newsletter">
                    <h4 className="footer__top__newsletter__title1">
                        ASSINE NOSSO <span className="footer__top__newsletter__title2">NEWSLETTER</span>
                    </h4>
                    <h5 className="footer__top__newsletter__title3">E RECEBA NOVIDADES E PROMOÇÕES</h5>
                    <form className="footer__top__newsletter__form">
                    <input placeholder="SEU NOME"></input>
                    <input placeholder="SEU EMAIL"></input>
                    <button className="footer__top__newsletter__form__button" > ENVIAR </button>
                    </form>
               </div>
           </div>
           <div className="footer__bottom">
              <div className="container footer__bottom__content">
                  <div className="footer__bottom__content__reservad">
                      <h3>NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados,
                          Rua Santa Ifigênia,
                      </h3>
                      <h4>
                          556 560/562 - Santa Ifigênia - CEP 01.207 000 - São Paulo / SP - CNPJ 07.282.516/0001-15 
                      </h4>
                   </div>
                   <div className=" footer__bottom__content__brands">
                       <EconverseLogo className="footer__bottom__content__brands__logo"/>
                       <img alt="Logo plataforma ecommerce Vtex " src={VtexLogo}/>
                    </div>
              </div>
           </div>
        </footer>
    )
}