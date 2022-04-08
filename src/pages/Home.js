import React from 'react'

//Importer des composants
import Presentation from '../components/Presentation';
import ImageSlider from '../components/ImageSlider';
/*
import Services from '../components/Services';
import Experiences from '../components/Experiences';
import Langages from '../components/Langages/Langages';
import MenuProjet from '../components/MenuProjet/MenuProjet';
*/
//Page d'accueil 

//Le composant de la page
const Home = () => {
  return (
    <main>
      <Presentation />
     <ImageSlider />
      {/*
      <Services />
      <Experiences />
      <MenuProjet />
      <Langages />*/}
    </main>
  );
}

export default Home