import React, { Component } from "react";
import Inglês from "../../../imgs/uptime.jpg";
import Angular from "../../../imgs/coursera_angular.jpg";
import Web from "../../../imgs/coursera_web.jpg";
import Nti from "../../../imgs/nti.jpg";
import ReactCourse from "../../../imgs/coursera_react.jpg";
import Sql from "../../../imgs/coursera_sql.jpg";
import CodeAnywhere from "../../../imgs/codeanywhere.png";

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "page1" };
    this.handleClick = this.handleClick.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.setState({ certificate: "certificate" });
    document.getElementById("certificate1").style.display = "none";
    document.getElementById("certificate2").style.display = "none";
    document.getElementById("certificate3").style.display = "none";
    document.getElementById("certificate4").style.display = "none";
    document.getElementById("certificate5").style.display = "none";
    document.getElementById("certificate6").style.display = "none";
    document.getElementById("certificate7").style.display = "none";
    document.getElementById("dot" + this.state.page[4]).style.backgroundColor =
      "";
  }

  handleClick(certificate) {
    if (this.state.certificate !== certificate) {
      this.refresh();
      this.setState({ certificate: certificate });
      document.getElementById(certificate).style.display = "block";
      console.log(certificate[4]);
      {
        /*document.getElementById("dot" + this.state.page[4]).style.backgroundColor = "#63d37b"*/
      }
    }
  }

  render() {
    return (
      <section>
        <div class="sectionTitle" id="certificatesSection">
          <h1>Certificados</h1>
        </div>
        <div class="certificates">
          <a
            href="https://drive.google.com/file/d/1doZHiakeg2t7IN8Tf-3ObWSVQd0ROczN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            id="certificate1"
          >
            <img src={Inglês} alt="Certificado de inglês pela UPTIME" />
          </a>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/J4Y7K7LSAAWH"
            target="_blank"
            rel="noopener noreferrer"
            id="certificate2"
          >
            <img src={Angular} alt="Certificado de Angular pelo Coursera" />
          </a>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/ZCBAS92S9XJP"
            target="_blank"
            rel="noopener noreferrer"
            id="certificate3"
          >
            <img src={ReactCourse} alt="Certificado de Angular pelo Coursera" />
          </a>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/4NGCTYZSGE2R"
            target="_blank"
            rel="noopener noreferrer"
            id="certificate4"
          >
            <img src={Sql} alt="Certificado de Angular pelo Coursera" />
          </a>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/NCTPEEUATNDG"
            target="_blank"
            rel="noopener noreferrer"
            id="certificate5"
          >
            <img src={Web} alt="Certificado de Web Development pelo Coursera" />
          </a>
          <a
            href="https://drive.google.com/file/d/1vmFUAtaUcPHgrHuJcOA8SpBySRiqKh6u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            id="certificate6"
          >
            <img src={Nti} alt="Certificado do Projeto Mover pelo NTI" />
          </a>
          <a
            href="https://drive.google.com/file/d/1SlUanxYwvt252BpUmAp9C3j6yF-WqnPi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            id="certificate7"
          >
            <img
              src={CodeAnywhere}
              alt="Certificado do bootcamp Code Anywhere - Avanade/Digital Innovation One"
            />
          </a>
          <div className="dots">
            <span
              onClick={() => this.handleClick("certificate1")}
              class="dot"
              id="dot1"
            ></span>
            <span
              onClick={() => this.handleClick("certificate2")}
              class="dot"
              id="dot2"
            ></span>
            <span
              onClick={() => this.handleClick("certificate3")}
              class="dot"
              id="dot3"
            ></span>
            <span
              onClick={() => this.handleClick("certificate4")}
              class="dot"
              id="dot4"
            ></span>
            <span
              onClick={() => this.handleClick("certificate5")}
              class="dot"
              id="dot5"
            ></span>
            <span
              onClick={() => this.handleClick("certificate6")}
              class="dot"
              id="dot6"
            ></span>
            <span
              onClick={() => this.handleClick("certificate7")}
              class="dot"
              id="dot7"
            ></span>
          </div>
        </div>
      </section>
    );
  }
}

export default Certificates;
