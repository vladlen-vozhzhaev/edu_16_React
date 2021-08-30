import React from "react";
import {Route} from "react-router-dom";

export class Auth extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1 className="text-center my-3">Вход на сайт</h1>
                <div className="col-sm-5 mx-auto">
                    <form onSubmit="sendForm(this); return false;">
                        <div className="mb-3">
                            <input name="email" type="email" className="form-control" placeholder="E-mail (Логин)"/>
                        </div>
                        <div className="mb-3">
                            <input name="pass" type="password" className="form-control" placeholder="Пароль"/>
                        </div>
                        <p id="info" hidden>Логин или пароль введён неверно!</p>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary" value="Войти"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
