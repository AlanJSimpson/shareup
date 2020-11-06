import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterComponent";
import Event from "../components/Event";
import fakeData from "./fakeData";
import css from "./EventPage.module.css";
import UserComments from "../components/UserComments";
import userData from "./userData";
import ButtonShareUp from "../components/ButtonShareUp";
import { sessionInfo } from '../Api/usersAPI'
import axios from 'axios'

export default function EventPage() {
  const { name, photo, comment } = userData[1];
  const [userInfo, setUserInfo] = useState()
  useEffect(() => {

    const fetcher = async () => {

      // const result = await axios.get('http://localhost:3001/user/event')
      const result = await sessionInfo()
      console.log('eventPage >>>>>> ',result.data)
    }
    fetcher()
  }, [])

  return (
    <div>
      <Navbar />
      <main className={css.eventContent}>
        <Event {...fakeData[4]} />
        <div className={css.eventDescription}>
          <h3>Descrição: </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sit
            distinctio autem explicabo quisquam doloribus possimus perferendis,
            eius consequatur eveniet? Ex facere id autem officiis quibusdam,
            eligendi culpa doloribus ullam?
          </p>
        </div>
        <div className={css.userCommentsContainer}>
          <div className={css.userComments}>
            <h3>Comentários: </h3>
            <UserComments {...userData[0]} cols="50" rows="5" />
            <UserComments
              name={name}
              photo={photo}
              comment={comment}
              cols="50"
              rows="5"
            />
          </div>
          <div className={css.currentUser}>
            <UserComments
              photo={"./images/malucoPirotesco.jpg"}
              name="Maluco pirotesco"
              cols="50"
              rows="8"
            />
            <ButtonShareUp
              newStyle={{
                alignSelf: "flex-end",
                marginRight: "5px",
                marginTop: "5px",
                width: "110px",
              }}
            >
              Enviar
            </ButtonShareUp>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
