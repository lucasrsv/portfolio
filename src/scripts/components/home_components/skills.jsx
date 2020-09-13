import React, { Component } from 'react'

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = { page: "page1" }
        this.handleClick = this.handleClick.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    refresh() {
        this.setState({ page: "page1"})
        document.getElementById("page1").style.display = "none"
        document.getElementById("page2").style.display = "none"
        document.getElementById("dot" + this.state.page[4]).style.backgroundColor = ""
    }

    handleClick(page) {
        if (this.state.page !== page) {
            this.refresh()
            this.setState({ page: page })
            document.getElementById(page).style.display = "block"
            console.log(page[4])
            {/*document.getElementById("dot" + this.state.page[4]).style.backgroundColor = "#63d37b"*/}
        }
    }

    render() {
        return (
            <section id="skills">
                 <div class="sectionTitle" id="skillsSection">
                    <h1>Skills</h1>
                </div>
                <div class="skills">
                    <div id="page1">
                        <div class="skill">
                        <h3>Android</h3>
                        <progress max="100" value="55"></progress>
                        </div>

                        <div class="skill">
                        <h3>Java</h3>
                        <progress max="100" value="70"></progress>
                        </div>

                        <div class="skill">
                        <h3>Kotlin</h3>
                        <progress max="100" value="60"></progress>
                        </div>

                        <div class="skill">
                        <h3>Javascript</h3>
                        <progress max="100" value="40"></progress>
                        </div>

                        <div class="skill">
                        <h3>Typescript</h3>
                        <progress max="100" value="20"></progress>
                        </div>

                        <div class="skill">
                        <h3>HTML/CSS</h3>
                        <progress max="100" value="50"></progress>
                        </div>
                    </div>

                    <div id="page2">
                        <div class="skill">
                        <h3>Firebase</h3>
                        <progress max="100" value="45"></progress>
                        </div>

                        <div class="skill">
                        <h3>React</h3>
                        <progress max="100" value="50"></progress>
                        </div>

                        <div class="skill">
                        <h3>Node</h3>
                        <progress max="100" value="40"></progress>
                        </div>

                        <div class="skill">
                        <h3>Angular</h3>
                        <progress max="100" value="40"></progress>
                        </div>

                        <div class="skill">
                        <h3>SQL</h3>
                        <progress max="100" value="20"></progress>
                        </div>

                        <div class="skill">
                        <h3>Git/Github</h3>
                        <progress max="100" value="70"></progress>
                        </div>
                    </div>

                    <div className="dots">
                        <span onClick={() => this.handleClick("page1")} class="dot" id="dot1"></span>
                        <span onClick={() => this.handleClick("page2")} class="dot" id="dot2"></span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills