import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";
import {AddArticle} from "./components/AddArticle";
import {MainPage} from "./components/MainPage";
import {Article} from "./components/Article";
import {EditArticle} from "./components/EditArticle";
import {Auth} from "./components/Auth";
import {Reg} from "./components/Reg";

function Menu(){
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">Front-end</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">Главная</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
              </li>
            </ul>
            <NavLink className="btn btn-success me-3" to="/auth">Войти</NavLink>
            <NavLink className="btn btn-success" to="/reg">Регистрация</NavLink>
          </div>
        </div>
      </nav>
  )
}


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <div className="container py-5">
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route path="/addArticle">
            <AddArticle/>
          </Route>
          <Route path="/blog">
            <Article/>
          </Route>
          <Route path="/edit">
            <EditArticle/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/reg">
            <Reg/>
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
