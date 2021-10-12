import React from "react";
import { useHistory } from "react-router-dom";
import { useUI } from "../../app/context/ui";
import { WelcomeStyles } from "../../assets/css/welcome-style";
import logoFondoPortada from "../../assets/images/portal-morty-smith-rick.svg";
import logoSuazo from "../../assets/images/suazo.png";
import logoTitleRickAndMorty from "../../assets/images/titleRickAndMorty.png";
import overlay from "../../assets/images/overlay.png";
import 'animate.css';

const Welcome = () => {

  const style = WelcomeStyles();
  const { blockUI } = useUI();
  const history = useHistory();

  const handleRedirectHome = async () => {
    try {
      history.push('/home');
    } catch (e) {
      blockUI.current.open(false);
    }
  }

  return (
    <div className={style.wrapperWelcome}>
      <img src={logoFondoPortada} className={`${style.fondoPortada} animate__animated animate__fadeInDown`} alt='portal' />
      <img src={overlay} className={style.overlay} alt='overlay' />
      <img src={logoSuazo} className={style.imgSuazo} alt='imgSuazo' />
      <img src={logoTitleRickAndMorty} className={style.imgTitleRickAndMorty} alt='imgTitleRickAndMorty' />
      <p className="bienvenido">Bienvenido a Rick and Morty</p>
      <p className="info">En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y la reproducción del siguiente diseño.</p>
      <div className="wrapperBtnContinuar">
        <div onClick={handleRedirectHome}>Continuar</div>
      </div>
    </div>
  )
};

export default Welcome;
