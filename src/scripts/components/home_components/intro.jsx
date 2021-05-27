import React, { Component } from "react";
import Lucas from "../../../imgs/me.png";

class Intro extends Component {
  render() {
    return (
      <section class="intro" id="#intro">
        <img src={Lucas} alt="Lucas Rodrigues sentado, sorrindo para a foto." />
        <p>
          Me chamo Lucas, tenho 20 anos e sou estudante de Ciência da Computação
          na Universidade Federal de Pernambuco, atualmente no 5º período. Tenho
          atuado como <b>desenvolvedor Web</b> e também estudado{" "}
          <b>desenvolvimento Android</b>. Amo gatos e Ariana Grande{" "}
          <i
            class="em em-smiling_face_with_3_hearts"
            aria-label="Emoji sorrindo com três corações ao redor."
          ></i>
          .
        </p>
      </section>
    );
  }
}

export default Intro;
