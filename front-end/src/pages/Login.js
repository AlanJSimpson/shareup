import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import css from "./loginStyle.module.css";

export default function Login() {
  return (
    <>
      <div className={css.backgroundScreen}>
        <div className={css.backgroundContent}>
          <div className={css.apresentation} style={flexColumn}>
            <Logo />
            <p>Faça seu login e comece a compartilhar conhecimento!</p>
          </div>
          <form
            className={css.formStyle}
            style={flexColumn}
            method="POST"
            enctype="application/x-www-form-urlencoded"
          >
            <input
              type="text"
              placeholder="Usuário"
              name="login-user"
              id="login-user"
            />
            <input
              type="password"
              placeholder="Senha"
              name="login-password"
              id="login-password"
            />
            <a href="http://" rel="next">
              Esqueci a senha
            </a>
            <input
              newStyle={{ height: "30px", width: "130px" }}
              type={"submit"}
            >
              Entrar
            </input>
            <NavLink to="/Cadastro">
              <input
                newStyle={{ fontSize: "0.8em", margin: 0 }}
                type={"button"}
              >
                Faça o seu cadastro
              </input>
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
