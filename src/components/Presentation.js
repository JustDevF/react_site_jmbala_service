import React from 'react'
import './hero.css'
import image from './Images/all_construct_images.jpg'

//Le composant
const Presentation = () => {

 return (
    <section>
        <div className='containerPresentation'>
            {/*Présentation */}
            <div className='presentation1'>
                <h1>JDT MBALA SERVICES</h1>
                <p> Nous réalisons vos rêves en s'occupant des rénovations qui vous tiens à coeur</p>
                <h2>Construsons-ensemble !</h2>
                <p>Nous sommes à votre disposition pour réaliser avec vous tout type de travaux </p>
                <button className="btnHero1">Détails</button>
                <button className="btnHero2">S'informer</button>
            </div>
             {/*images d'illustration des services */}
            <div className='presentation2'>
                <img src={image} alt="image_jdt_mbala_construction" style={{height :'90%'}}/>
            </div>
        </div>
    </section>
 )
}

export default Presentation
