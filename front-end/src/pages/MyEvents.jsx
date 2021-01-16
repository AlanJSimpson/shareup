import React from 'react';
import BoxEvents from '../components/BoxEvents';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/Navbar';
import fakeData from '../pages/fakeData';

export default function MyEvents() {
  return (
    <div>
      <Navbar />
      <BoxEvents content={fakeData[0]}>Eventos confirmado</BoxEvents>
      <BoxEvents content={fakeData[1]}>Eventos Criados</BoxEvents>
      <BoxEvents content={fakeData[2]}>Eventos Concluídos</BoxEvents>
      <FooterComponent></FooterComponent>
    </div>
  );
}
