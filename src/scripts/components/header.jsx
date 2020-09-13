import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { useHistory } from 'react-router-dom'


class Header extends Component {
    constructor(props) {
        super(props)
        this.typeWriterCalled = false
        this.i = 0
        this.txt = 'Olá, seja bem vindo(a)!' /* The text */
        this.speed = 125 /* The speed/duration of the effect in milliseconds */
        this.typeWriter = this.typeWriter.bind(this)
        this.welcomeTitle = this.welcomeTitle.bind(this)
        this.buttonsClick = this.buttonsClick.bind(this)
    }

    componentDidMount() {
        this.typeWriter()
    }

    typeWriter() {
        if (!this.typeWriterCalled){
            if (this.i < this.txt.length) {
                document.getElementById("text").innerHTML += this.txt.charAt(this.i)
                this.i++
                setTimeout(this.typeWriter, this.speed)
            } else {
                this.typeWriterCalled = true
                {/*document.getElementById("headerNavBar").style.display = "block"
                this.buttonsClick()*/}
            }
        }
    }

    welcomeTitle() {
        document.getElementById("text").innerHTML = 'Olá, seja bem vindo(a)!'
        document.getElementById("headerNavBar").style.display = "block"
        this.buttonsClick()
    }

    buttonsClick() {
        var buttons = document.getElementsByClassName("headerLi")
        for (this.i in buttons) {
            if (this.i === 0) {
                buttons[this.i].onclick = function() {
                    window.location="#intro"
                }
            } else if (this.i === 1) {
                buttons[this.i].onclick = function() {
                    window.location="#projects"
                }
            } else if (this.i === 2) {
                buttons[this.i].onclick = function() {
                    window.location="#skillsSection"
                }
            } else if (this.i === 3) {
                buttons[this.i].onclick = function() {
                    window.location="#skills"
                }
            }
        }
    }

    render() {
        return (
            <header>
                <Helmet>
                    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Helmet>
                <div class="headerTitle">
                    <h1 id="text"></h1>
                </div>
                {/*<div class="headerNav" id="headerNavBar">
                    <nav>
                        <ul>
                            <li class="headerLi">
                                Home
                            </li>
                            <li class="headerLi">
                                Projetos
                            </li>
                            <li class="headerLi">
                                Skills
                            </li>
                            <li class="headerLi">
                                Contato
                            </li>
                        </ul>
                    </nav>
                </div>*/}
            </header>
        )
    }
}

export default Header