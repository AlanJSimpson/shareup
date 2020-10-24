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
          encType="application/x-www-form-urlencoded"
          style={flexColumn}
          method="POST"
          action="http://localhost:3001/user/register"
        >
          <h3>Faça o seu cadastro</h3>
          <InputShareUp
            type="text"
            placeholder="nome"
            name="nome"
            id="nome"
            style={{
              background:
                'url("https://img.icons8.com/ios-glyphs/30/000000/user--v1.png") no-repeat 5px',
              backgroundSize: "28px 25px",
            }}
          />
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
            name="registerPassword"
            id="registerPassword"
            style={{
              background:
                'url("https://img.icons8.com/metro/26/000000/password.png") no-repeat 7px 5px ',
              backgroundSize: "20px 18px",
            }}
          />
          <InputShareUp
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            id="confirmPassword"
            style={{
              background:
                'url("https://img.icons8.com/metro/26/000000/password.png") no-repeat 7px 5px ',
              backgroundSize: "20px 18px",
            }}
          />

          <ButtonShareUp type="submit">Cadastrar</ButtonShareUp>

          <Link to="/user/login">
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
