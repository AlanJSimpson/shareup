import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import { ContextConsumer } from '../context/ContextProvider'
import Navbar from "../components/Navbar";
import Footer from "../components/FooterComponent";
import styles from "./EditProfile.module.css";
import BoxEvents from "../components/BoxEvents";
import data from "./userData";
import getPassport from "../Api/getPassport";
import { updateProfile, getProfile } from "../Api/profileUserApi";

const { title, instructor, date, time, image } = {
  id: 1,
  title: "Piano",
  instructor: "Miguel",
  date: "25/11",
  time: "20:00", 
  image: "../images/piano.png",
};

export default function EditProfile() {
  const {userNameContext, setUserNameContext} = useContext(ContextConsumer)

  const [userName, setUserName] = useState("");
  const [userCel, setUserCel] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [userSex, setUserSex] = useState("");

  const setDataChange = (e) => {
    switch (e.target.id) {
      case "nameUser":
        setUserName(e.target.value);
        break;
      case "celUser":
        setUserCel(e.target.value);
        break;
      case "userSex":
        setUserSex(e.target.value);
        break;
      case "aboutUser":
        setAboutMe(e.target.value);
        break;
      default:
        break;
    }
  };

  const updateData = async () => {
    const result = await updateProfile({
      nome: userName,
      cel: userCel || null,
      about: aboutMe,
      sexo: userSex || null,
    });
    console.log(result);
    setUserNameContext(userName)
    return result;
  };

  useEffect(() => {
    const asyncResult = async () => {
      const passportResult = await getPassport();
      const profileResult = await getProfile()
      const {sexo, cel, about} = profileResult.data;
      setUserCel(cel)
      setAboutMe(about)
      setUserSex(sexo)
      setUserName(passportResult.data.passport.user.nome);
    };

    asyncResult();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.EditProfile}>
        <div className={styles.avatarContainer}>
          <Link to="/profile">
            <span className={styles.backArrow}>
              <i className="fas fa-arrow-left"></i>
            </span>
          </Link>
          <div
            style={{ backgroundImage: `url(../${data[0].photo}` }}
            className={styles.avatar}
          ></div>
          <Link to="/profile/edit">
            <span className={styles.camera}>
              <i className="fas fa-camera"></i>
            </span>
          </Link>
        </div>
        <h3 className={styles.infoTitle}>Informações pessoais:</h3>

        <form className={styles.formContainer} action="">
          <label htmlFor="nameUser">Nome:</label>
          <input
            placeholder="Nome"
            type="text"
            value={userName}
            id="nameUser"
            onChange={setDataChange}
          />
          <label htmlFor="celUser">Cel:</label>
          <input
            placeholder="Cel"
            type="text"
            id="celUser"
            value={userCel}
            onChange={setDataChange}
          />
          <label htmlFor="userSex">Sexo:</label>
          <select
            name="userSex"
            id="userSex"
            defaultValue={userSex}
            onChange={setDataChange}
          >
            <option disabled="disabled" value="null">
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
          <i className={cx("fas fa-plus-circle", styles.plusIcon)}></i>
          <BoxEvents content={{ title, instructor, date, time, image }}>
            Eventos Criados
          </BoxEvents>
        </div>
        <button className={styles.saveBtn} onClick={updateData}>
          Salvar Alterações
        </button>
      </div>
      <Footer />
    </>
  );
}
