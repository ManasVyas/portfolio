import React, { useState } from "react";
import "./App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-title">Welcome!</div>
        {isClicked ? (
          <a
            href="#"
            className="toggle-button"
            onClick={() => setIsClicked(false)}
          >
            <FaTimes size={25} />
          </a>
        ) : (
          <a
            href="#"
            className="toggle-button"
            onClick={() => setIsClicked(true)}
          >
            <FaBars size={25} />
          </a>
        )}
        <div className={isClicked ? "navbar-links active" : "navbar-links"}>
          <ul>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="./PostgreSQL_cheat_sheet.pdf">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="landing-page">
        <p className="sub-heading">Hey, This is</p>
        <h1 className="main-heading">Manas Vyas</h1>
        <h1 className="main-heading">Passionate Front End Developer</h1>
        <p className="sub-heading">
          I'm a software engineer specializing in building front-end (and
          occasionally back-end) of web applications. Currently, I'm focused on
          building accessible, human-centered web applications at Tata
          Consultancy Services.
        </p>
      </div>
      <div className="about-me" id="about-me">
        <img src="./images/_DSC0180.JPG" alt="profile" />
        <p>
          नमस्ते! My name is Manas and I have experience of building web
          applications with JavaScript/ReactJS/Node.js/Postgres/MongoDB. My web
          development journey was started on May-2019 at Tata Consultancy
          Services.
        </p>
      </div>
      <div className="work" id="work">
        <h2>Skills</h2>
        <img src="./images/html5.svg" alt="HTML5 Logo" title="HTML5" />
        <img src="./images/css3.svg" alt="CSS3 Logo" title="CSS3" />
        <img
          src="./images/javascript.svg"
          alt="Javascript"
          title="JavaScript"
        />
        <img
          src="./images/bootstrap.svg"
          alt="Bootstrap Logo"
          title="Bootstrap"
        />
        <img src="./images/react.svg" alt="ReactJS Logo" title="ReactJS" />
        <img src="./images/nodejs.svg" alt="Node.js Logo" title="Node.js" />
        <img
          src="./images/postgresql.svg"
          alt="Postgresql Logo"
          title="Postgresql"
        />
        <img src="./images/mongodb.svg" alt="MongoDB Logo" title="MongoDB" />
        <h2>Dev Tools</h2>
        <img src="./images/github.svg" alt="Github Logo" title="Git" />
        <img src="./images/vscode.svg" alt="VSCode Logo" title="VS Code" />
        <img
          src="./images/postman-api.svg"
          alt="postman Logo"
          title="Postman"
        />
        <h1>Projects</h1>
        <div className="card">
          <img src="./images/toDoList_Home.PNG" alt="Project Home Page" />
          <h1>To-Do List</h1>
          <p className="features">
            <b>Features</b>
          </p>
          <ul className="work-ul">
            <li>✔ Authentication</li>
            <li>✔ Authorization</li>
            <li>✔ Database triggers</li>
            <li>✔ Audit records</li>
            <li>✔ Task & User CRUD</li>
          </ul>
          <a href="https://github.com/ManasVyas/todo-list-vanilla-js.git">
            <GoMarkGithub size={25} title="Git Hub Link" />
          </a>
        </div>
        <div className="card">
          <img src="./images/bForBurger_Home.PNG" alt="Project Home Page" />
          <h1>Order Food Online</h1>
          <p className="features">
            <b>Features</b>
          </p>
          <ul className="work-ul">
            <li>✔ Authentication</li>
            <li>✔ Authorization</li>
            <li>✔ Checkout with Paypal</li>
            <li>✔ Manage Orders</li>
            <li>✔ Item, Order & User CRUD</li>
          </ul>
          <a href="https://github.com/ManasVyas/B4burger.git">
            <GoMarkGithub size={25} title="Git Hub Link" />
          </a>
        </div>
      </div>
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <h2>
          <a className="mail-link" href="mailto:vyasmanass100@gmail.com">
            vyasmanass100@gmail.com
          </a>
        </h2>
        <a href="https://www.linkedin.com/in/manas-vyas-504785185">
          <AiFillLinkedin size={35} />
        </a>
        <a href="https://github.com/ManasVyas">
          <AiFillGithub size={35} />
        </a>
      </div>
    </>
  );
}

export default App;
