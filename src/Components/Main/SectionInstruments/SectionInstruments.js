import React from 'react'
import Api from './Api';
import Modal from './Modal/Modal';


export default function SectionInstruments () {
   const [modalData, setModalData] = React.useState(''); 
   const [showModal, setShowModal] = React.useState(false); // o Modal é exibido quando o estado for true,
                                                            // ele é setado clicando no produto
 
   const {products} = Api; 
   let productsShowCase = []
   const [offset, setOffSet] = React.useState(8);

   for(let i = 0; i< offset; i++) {
        productsShowCase.push( products[i])

   }

     // Essa função puxa o index da função map do botão que está sendo clicado, e seta os dados do modal com base nesse index sendo passado no array de produtos gerais.
     function openModal(index) {
        setModalData(productsShowCase[index]);
        setShowModal(true);
    }
    

    return (
        <section className="products container">
            <div className="products__div">
                <h1>
                <span  className="products__div__title1">INSTRUMENTOS</span>
                <span className="products__div__title2">DESTAQUES</span>
                </h1> 
                <p  className="products__div__phrase">
                    it is a long established fact that a reader will be destracted by readable
                </p>
            </div>
            <div className="products__showcase">
                {productsShowCase.map((product, index) => (
                    <button onClick={() => openModal(index)} key={product.productName} className="products__showcase__product">
                    <div className="products__showcase__product__img">
                         <img alt={product.productName} width="100%" height="165px" src={product.photo}/>
                     </div>
                     <h1 className="products__showcase__product__title">{product.productName}</h1>
                     <h2 className="products__showcase__product__description">{product.descriptionShort}</h2>
                     <h3 className="products__showcase__product__price">R$ {product.price}</h3>
                 </button>
                ))}  
            </div>
            {offset < products.length ? <button className="products__showcase__seemore" onClick={ () => setOffSet(offset + 4)}>Ver Mais</button> : null}
            {showModal === true ? 
            <Modal
            img={modalData.photo} 
            title={modalData.productName}
            description={modalData.descriptionShort}
            price={modalData.price}
            setShowModal={setShowModal}
            /> 
            : null}    
        </section>
    )
}