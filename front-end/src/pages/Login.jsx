import React from "react";
import { NavLink } from "react-router-dom";

import InputShareUp from "../components/InputShareUp";
import ButtonShareUp from "../components/ButtonShareUp";
import css from "./loginStyle.module.css";

export default function Login() {
  return (
    <>
      <div className={css.backgroundScreen}>
        <div className={css.backgroundContent}>
          <div className={css.apresentation} style={flexColumn}>
            <p>Faça seu login e comece a compartilhar conhecimento!</p>
          </div>
          <form
            className={css.formStyle}
            style={flexColumn}
            method="POST"
            encType="application/x-www-form-urlencoded"
            action="http://localhost:3001/user/login"
          >
            <InputShareUp
              type="email"
              placeholder="email"
              name="email"
              id="email"
              style={{
                background:
                  'url("https://img.icons8.com/ios-glyphs/30/000000/new-post.png") no-repeat 7px',
                backgroundSize: "22px 22px",
              }}
            />

            <InputShareUp
              type="password"
              placeholder="senha"
              name="password"
              id="password"
              style={{
                background:
                  'url("https://img.icons8.com/metro/26/000000/password.png") no-repeat 7px 2px ',
                backgroundSize: "22px 22px",
              }}
            />

            <a id="forgot-password" href="https//www.google.com.br">
              Esqueci a senha
            </a>
            <ButtonShareUp type="submit">Entrar</ButtonShareUp>
            <NavLink to="/user/register">
              <span> Faça o seu cadastro</span>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

const flexColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "40%",
};
