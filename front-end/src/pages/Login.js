import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import InputShareUp from "../components/InputShareUp";
import css from "./loginStyle.module.css";
import ButtonShareUp from "../components/ButtonShareUp";

export default function Login() {
  return (
    <>
      <div className={css.backgroundScreen}>
        <div className={css.backgroundContent}>
          <div className={css.apresentation} style={flexColumn}>
            <Logo />
            <p>Faça seu login e comece a compartilhar conhecimento!</p>
          </div>
          <form className={css.formStyle} style={flexColumn} method="POST">
            <InputShareUp
              type="text"
              placeholder="Usuário"
              name="login-user"
              id="login-user"
            />
            <InputShareUp
              type="password"
              placeholder="Senha"
              name="login-password"
              id="login-password"
            />
            <a href="http://" rel="next">
              Esqueci a senha
            </a>
            <ButtonShareUp
              newStyle={{ height: "30px", width: "130px" }}
              type={"submit"}
            >
              Entrar
            </ButtonShareUp>
            <NavLink to="/cadastro">
              <ButtonShareUp
                newStyle={{ fontSize: "0.8em", margin: 0 }}
                type={"button"}
              >
                Faça o seu cadastro
              </ButtonShareUp>
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
