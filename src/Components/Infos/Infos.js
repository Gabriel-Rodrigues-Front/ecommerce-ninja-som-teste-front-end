import React from 'react'
import { ReactComponent as Akg} from '../Assets/akg.svg'
import { ReactComponent as Roland} from '../Assets/roland.svg'
import { ReactComponent as Boss} from '../Assets/boss.svg'
import { ReactComponent as Shure} from '../Assets/shure.svg'
import { ReactComponent as ArrowLeft} from '../Assets/arrowleftbrands.svg'
import { ReactComponent as ArrowRight} from '../Assets/arrowrightbrands.svg'
import { ReactComponent as ArrowRightAbout} from '../Assets/arrowrightabout.svg'
import { ReactComponent as ArrowLeftAbout} from '../Assets/arrowleftabout.svg'

import DesignerPhoto from '../Assets/designer.png'

 

export default function Infos () {


    return (
        <article className="container infos">
             <div className=" infos__div">
                <h1>
                <span className="infos__div__title2">AS</span>
                <span  className="infos__div__title1">MELHORES</span>
                <span className="infos__div__title2">MARCAS</span>
                </h1> 
                <p className="infos__div__phrase">
                    it is a long established fact that a reader will be destracted by readable
                </p>
            </div>

            <div className="container brands">
                <ArrowLeft className="brands__arrowleft"/>
                <Akg className="brands__svg1"/>
                <Roland className="brands__svg2"/>
                <Boss className="brands__svg3"/>
                <Shure className="brands__svg4"/>
                <ArrowRight className="brands__arrowright" />
            </div>

            <div className="container about">
                <h2 className="about__title">SOBRE NÓS</h2>
                <p className="about__description">
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                opposed to using ‘Content here, content here’, making it look like readable English. Many desktop 
                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a 
                search for ‘lorem ipsum’ will uncover many web sites still in their infancy. 
                Lorem Ipsum as their default model text, and a search for 
                ‘lorem ipsum’ will uncover many web sites still in their infancy. 
                Lorem Ipsum as their default model text, and a search for 
                ‘lorem ipsum’ will uncover many web sites still in their infancy.   
                </p>
            </div>

            <div className="container designers">
                <ArrowLeftAbout className="designers__arrowLeft"/>
                <div className="designers__description">
                    <div className="designers__description__personalinfos">
                        <img src={DesignerPhoto} alt="foto do designer da loja de instrumentos musicais Ninja Som"/>
                        <div className="designers__description__personalinfos__data"> 
                            <h3 className="designers__description__personalinfos__data__name">
                                Felipe Salmim
                            </h3>
                            <h4 className="designers__description__personalinfos__data__occupation">
                                Designer
                            </h4>
                         </div>
                    </div>
                    <div className="designers__description__text" >
                    Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’
                    </div>
                </div>
                <ArrowRightAbout className="designers__arrowRight"/>
            </div>
            </article>
    )
}