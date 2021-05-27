import React, { Component } from "react";
import AlemDaCura from "../../../imgs/alemdacura.png";
import Bonte from "../../../imgs/bonte.png";
import Cecine from "../../../imgs/sti.jpg";

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div class="sectionTitle" id="projectsSection">
          <h1>Projetos</h1>
        </div>
        <div class="projects">
          <div class="project">
            <a
              href="https://www.instagram.com/alemdacura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AlemDaCura} alt="Além da Cura." />
            </a>
            <p class="projectDescription">
              O <b>Além da Cura</b> é um projeto voluntário que já entrevistou
              50 mulheres mulheres com câncer, em 9 países e 5 continentes, e
              estamos nos preparando para lançarmos um documentário com todas
              elas! Hoje, o Além da Cura trabalha não só com mulheres que
              enfrentam o câncer, mas sim com mulheres e saúde em geral. <br />
              Entrei no projeto em março de 2019, atuo como desenvolvedor Web
              (utilizando React, HTML/CSS, JS, Sass), mas já fiz parte da equipe
              de Comunicação, elaborando pesquisas, conteúdos e gerenciando as
              redes sociais do projeto. Além disso, também trabalho como
              tradutor das entrevistas em inglês. <br /> <br /> <br />
            </p>
          </div>

          <div class="project">
            <a
              href="https://www.instagram.com/redebonte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Bonte} alt="bontê." />
            </a>
            <p class="projectDescription">
              O <b>bontê</b> é um app sobre empatia. Nele, existe um céu
              estrelado, e cada estrela sugere uma boa ação que o usuário pode
              realizar quantas vezes quiser, tornando-a um hábito em seu dia a
              dia. Sempre que uma ação é feita, sua estrela acende, e o objetivo
              do usuário é iluminar o seu céu através do exercício de boas
              ações. Entrei no projeto como desenvolvedor Android, pois o app só
              possuía uma versão iOS. Comecei o desenvolvimento da versão{" "}
              <b>Android</b> (nativa) em abril, utilizando a linguagem{" "}
              <b>Kotlin</b>. No momento, o app está em fase de testes e já foi
              enviado para mais de 30 usuários, quase pronto para ser enviado a
              Google Play.
            </p>
          </div>

          <div class="project">
            <a
              href="https://www.ufpe.br/sti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Cecine} alt="STi." />
            </a>
            <p class="projectDescription">
              Participei do STi, por 6 meses, como bolsista de desenvolvimento.
              Desenvolvi em equipe uma plataforma web, para a Pró Reitoria de
              Extensão e Cultura da UFPE, utilizando Javascript, React e a
              metodologia ágil SCRUM, além de prototipar a ferramenta utilizando
              o Figma.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
