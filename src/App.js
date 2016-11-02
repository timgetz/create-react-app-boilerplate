import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import * as Survey from 'survey-react';

class App extends Component {

    constructor() {
        super();

        Survey.Survey.cssType = "bootstrap";

        this.surveyJson = {
            title: "Describe your case details",
            goNextPageAutomatic: true,
            showProgressBar: "bottom",
            "pages": [
                {
                    "name": "page1",
                    "questions": [
                        {
                            "type": "radiogroup",
                            isRequired: true,
                            "choices": [
                                "Family",
                                "Criminal Defense",
                                "Business",
                                "Personal Injury",
                                "Bankruptcy & Finances",
                                "Products & Services"
                            ],
                            colCount: 2,
                            "name": "question1",
                            "title": "Type of lawyer you need"
                        }
                    ]
                },
                {
                    "name": "page2",
                    "questions": [
                        {
                            "type": "html",
                            "html": "<p>This will take about 15 minutes.  If you need help on any page, just click on this symbol</p>",
                            "name": "question2"
                        },
                        {
                            type: "text",
                            name: "email",
                            title: "Please enter your e-mail",
                            isRequired: true,
                            validators: [{type: "email"}]
                        },
                        {
                            "type": "checkbox",
                            "choices": [
                                "Adoptions",
                                "Child Custody",
                                "Child Support",
                                "Divorce"
                            ],
                            colCount: 2,
                            isRequired: true,
                            "name": "question3",
                            "title": "Family - Most Common Issues"
                        }
                    ]
                }
            ]
        };
    }

    sendDataToServer() {
        console.log("SendToServer...");
        console.log("SendToServer...");
    }


    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Survey.Survey json={this.surveyJson} onComplete={this.sendDataToServer} />
            </div>
        );
    }
}

export default App;
