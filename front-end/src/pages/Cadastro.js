import React from "react";
import Logo from "../components/Logo";
import css from "./loginStyle.module.css";
import InputShareUp from "../components/InputShareUp";
import ButtonShareUp from "../components/ButtonShareUp";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className={css.backgroundScreen}>
      <div className={css.backgroundContent}>
        <div className={css.apresentation} style={flexColumn}>
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at
            vitae iusto consequatur nulla. Totam incidunt asperiores aperiam
            quis
          </p>
        </div>

        <form
          className={css.formStyle}
          enctype="application/x-www-form-urlencoded"
          style={flexColumn}
          method="POST"
          action="http://localhost:3001/user/register"
        >
          <h3>Faça o seu cadastro</h3>
          <InputShareUp type="text" placeholder="nome" name="nome" id="nome" />
          <InputShareUp
            type="email"
            placeholder="email"
            name="email"
            id="email"
          />
          <InputShareUp
            type="password"
            placeholder="senha"
            name="registerPassword"
            id="registerPassword"
          />
          <InputShareUp
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            id="confirmPassword"
          />

          <ButtonShareUp type="submit">Cadastrar</ButtonShareUp>

          <Link to="/Login">
            <span>Retornar para a tela de Login</span>
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
