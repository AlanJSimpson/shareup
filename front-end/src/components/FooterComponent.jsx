import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { GrLinkedin, GrTwitter } from 'react-icons/gr';
import css from './style/Footer.module.css';

export default function FooterComponent() {
  return (
    <div className={css.footer}>
      <div className={css.socialMedia}>
        <span>Redes sociais</span>
        <div className={css.socialMediaIcons}>
          <FaFacebook />
          <FiInstagram />
          <GrTwitter />
          <GrLinkedin />
        </div>
      </div>
      <div className={css.enterprise}>
        <span> &copy; 2020 ShareUp</span>
        <span>Todos os direitos reservados</span>
      </div>
      <div className={css.contacts}>
        <h3>contato</h3>
        <span>renanfelice@gmail.com</span>
        <span>alansantos.dev@gmail.com</span>
        <span>jasminirebeca10@gmail.com</span>
      </div>
    </div>
  );
}
