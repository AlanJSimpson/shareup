import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getProfile, updateProfile } from '../Api/profileUserApi';
import BoxEvents from '../components/BoxEvents';
import Footer from '../components/FooterComponent';
import Navbar from '../components/Navbar';
import styles from './EditProfile.module.css';

const { title, instructor, date, time, image } = {
  id: 1,
  title: 'Piano',
  instructor: 'Miguel',
  date: '25/11',
  time: '20:00',
  image: '../images/piano.png',
};

export default withRouter(function EditProfile(props) {
  const [userName, setUserName] = useState('');
  const [userCel, setUserCel] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [userSex, setUserSex] = useState('');
  const [avatar, setAvatar] = useState('');
  const formEl = useRef(null);

  const setDataChange = e => {
    switch (e.target.id) {
      case 'nameUser':
        setUserName(e.target.value);
        break;
      case 'celUser':
        setUserCel(e.target.value);
        break;
      case 'userSex':
        setUserSex(e.target.value);
        break;
      case 'aboutUser':
        setAboutMe(e.target.value);
        break;
      case 'inputUserImage':
        setAvatar(e.target.value);
        break;
      default:
        break;
    }
  };

  const updateData = async () => {
    await updateProfile({
      nome: userName,
      cel: userCel || null,
      about: aboutMe,
      sexo: userSex || null,
      avatar: avatar || null,
    });
    formEl.current.submit();
    props.history.push('/profile');
  };

  useEffect(() => {
    const asyncResult = async () => {
      const profileResult = await getProfile();
      const { sexo, cel, about, registeredUser, avatar_user } = profileResult.data;
      const avatarUser = avatar_user.slice(avatar_user.search(/avatars/i) + 8);
      console.log(avatarUser);
      setUserCel(cel);
      setAboutMe(about);
      setUserSex(sexo);
      setUserName(registeredUser.nome);
      setAvatar(avatarUser);
    };
    console.log('->', avatar);
    asyncResult();
  }, [avatar]);

  return (
    <>
      <Navbar />
      <div className={styles.EditProfile}>
        <form ref={formEl} action="http://localhost:3001/user/profile/edit" method="post" encType="multipart/form-data">
          <div className={styles.avatarContainer}>
            <Link to="/profile">
              <span className={styles.backArrow}>
                <i className="fas fa-arrow-left"></i>
              </span>
            </Link>
            <div
              style={{
                backgroundImage: `url(../../avatars/${avatar})`,
              }}
              className={styles.avatar}
            ></div>

            <label htmlFor="inputUserImage">
              <span className={styles.camera}>
                <i className="fas fa-camera"></i>
              </span>
            </label>
            <input type="file" name="avatar" id="inputUserImage" style={{ display: 'none' }} onChange={setDataChange} />
          </div>
        </form>
        <form className={styles.formContainer} action="">
          <h3 className={styles.infoTitle}>Informações pessoais:</h3>
          <label htmlFor="nameUser">Nome:</label>
          <input placeholder="Nome" type="text" value={userName || ''} id="nameUser" onChange={setDataChange} />
          <label htmlFor="celUser">Cel:</label>
          <input placeholder="Cel" type="text" id="celUser" value={userCel || ''} onChange={setDataChange} />
          <label htmlFor="userSex">Sexo:</label>
          <select name="userSex" id="userSex" onChange={setDataChange} value={userSex || ''}>
            <option disabled="disabled" value="">
              Escolha:
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Não binário">Não Binário</option>
          </select>
          <label htmlFor="aboutUser">Sobre mim:</label>
          <textarea
            rows="7"
            cols="50"
            id="aboutUser"
            placeholder="Sobre mim"
            onChange={setDataChange}
            value={aboutMe}
          ></textarea>
        </form>
        <div className={styles.boxEventsContainer}>
          <i className={cx('fas fa-plus-circle', styles.plusIcon)}></i>
          <BoxEvents content={{ title, instructor, date, time, image }}>Eventos Criados</BoxEvents>
        </div>
        <button className={styles.saveBtn} onClick={updateData}>
          Salvar Alterações
        </button>
      </div>
      <Footer />
    </>
  );
});
