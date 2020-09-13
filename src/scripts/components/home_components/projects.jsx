import React, { Component } from 'react'
import AlemDaCura from '../../../imgs/alemdacura.png'
import Bonte from '../../../imgs/bonte.png'
import Cecine from '../../../imgs/cecine.png'

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div class="sectionTitle" id="projectsSection">
                    <h1>Projetos</h1>
                </div>
                <div class="projects">
                    <div class="project">
                        <a href="https://www.instagram.com/alemdacura" target="_blank" rel="noopener noreferrer">
                            <img src={AlemDaCura} alt="Além da Cura."/>
                        </a>
                        <p class="projectDescription">
                            O <b>Além da Cura</b> é um projeto voluntário que já entrevistou 50 mulheres mulheres com câncer, em 9 países, nos 5 continentes,
                            e estamos nos preparando para lançarmos um documentário com todas elas! <br/>
                            Entrei no projeto em março de 2019, inicialmente como desenvolvedor Web (utilizando React, HTML/CSS, JS, Sass), mas hoje trabalho principalmente na área de comunicação e redes sociais.
                            Além disso, também trabalho como tradutor das entrevistas em inglês. <br/> <br/> <br/> 
                        </p>
                    </div>

                    <div class="project">
                        <a href="https://www.instagram.com/redebonte" target="_blank" rel="noopener noreferrer">
                            <img src={Bonte} alt="bontê."/>
                        </a>
                        <p class="projectDescription">
                            O <b>bontê</b> é um app sobre empatia. Nele, existe um céu estrelado, e cada estrela sugere uma boa ação que o usuário pode 
                            realizar quantas vezes quiser, tornando-a um hábito em seu dia a dia. Sempre que uma ação é feita, sua estrela acende, e o objetivo do usuário é iluminar
                            o seu céu através do exercício de boas ações.
                            Comecei o desenvolvimento da versão <b>Android</b> (nativa) em abril, utilizando a linguagem <b>Kotlin</b>. No momento, o app está em fase de testes, quase pronto para 
                            ser enviado a Google Play.
                        </p>
                    </div>

                    <div class="project">
                        <a href="https://www.ufpe.br/cecine" target="_blank" rel="noopener noreferrer">
                            <img src={Cecine} alt="Cecine."/>
                        </a>
                        <p class="projectDescription"> 
                            A <b>Coordenadoria do Ensino de Ciências do Nordeste</b> é uma unidade da Pró-Reitoria de Extensão e Cultura da UFPE.
                            Nela, atuo como bolsista de Programação, ministrando cursos de Programação Básica, que englobam conceitos iniciais e programação a objetivos, utilizando a 
                            linguagem Java. Durante este momento de pandemia, o foco está sendo a oferta de cursos para profesores sobre Tecnologias Aplicadas ao Ensino.
                        </p>
                    </div>
                </div>
            
            </section>  
        )
    }
}

export default Projects