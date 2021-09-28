import React from 'react';
import Banner1 from '../../Assets/imagenews1.png';
import Banner2 from '../../Assets/imagenews2.png';


export default function SectionNews () {

    return(
        <section className="sectionNews">
            <div className="sectionNews__new">
              <img alt="Mesa de som banner instrumentos" src={Banner1}/>
              <div className="sectionNews__new__content">
                  <div className="sectionNews__new__content__divtitle">
                     <h5 className="sectionNews__new__content__divtitle__content">NOVIDADES</h5>
                   </div>   
                  <h1 className="sectionNews__new__content__description1">ÁUDIO</h1>
                  <h2 className="sectionNews__new__content__description2">PROFISSIONAL</h2>
                  <a className="sectionNews__new__content__button" href="/">CONFIRA</a>
               </div>
            </div>
            <div className="sectionNews__new">
              <img alt="Banner instrumento guitarra tocando" src={Banner2}/>
              <div className="sectionNews__new__content">
                  <div className="sectionNews__new__content__divtitle">
                     <h5 className="sectionNews__new__content__divtitle__content">NOVIDADES</h5>
                   </div>   
                  <h1 className="sectionNews__new__content__description1">INSTRUMENTOS</h1>
                  <h2 className="sectionNews__new__content__description2">MUSICAIS</h2>
                  <a className="sectionNews__new__content__button" href="/">CONFIRA</a>
               </div>
            </div>
        </section>
    )
}