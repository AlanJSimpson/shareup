import React from "react";
import css from "./loginStyle.module.css";
import InputShareUp from "../components/InputShareUp";
import ButtonShareUp from "../components/ButtonShareUp";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className={css.backgroundScreen}>
      <div className={css.backgroundContent}>
        <div className={css.apresentation} style={flexColumn}>
          <div className={css.logo}>
            <img src="../images/logo.png" alt="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at
            vitae iusto consequatur nulla. 
          </p>
        </div>

        <form
          className={css.formStyle}
          encType="application/x-www-form-urlencoded"
          style={flexColumn}
          method="POST"
          action="http://localhost:3001/user/register"
        >
          <h3 className={css.registerTitle}>Faça o seu cadastro</h3>
          <InputShareUp
            type="text"
            placeholder="nome"
            name="nome"
            id="nome"
            icon="fas fa-user-alt"
          />
          <InputShareUp
            type="email"
            placeholder="email"
            name="email"
            id="email"
            icon="fas fa-envelope"
          />
          <InputShareUp
            type="password"
            placeholder="senha"
            name="registerPassword"
            id="registerPassword"
            icon="fas fa-lock"
          />
          <InputShareUp
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            id="confirmPassword"
            icon="fas fa-lock"
          />

          <ButtonShareUp type="submit">Cadastrar</ButtonShareUp>

          <Link to="/user/login">
            <span> &larr; Retornar para Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

const flexColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "40%",
};
