import React from "react";
import {Route} from "react-router-dom";
import {host} from "../config";

export class Reg extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "",
            lastname: "",
            email: "",
            pass: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("lastname", this.state.lastname);
        formData.append("email", this.state.email);
        formData.append("pass", this.state.pass);
        console.log("Регистрация")
        fetch(host+"/php/handlerReg.php",{
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result)
            })
    }

    render() {
        return (
            <div>
                <h1 className="text-center my-3">Регистрация на сайте</h1>
                <div className="col-sm-5 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input name="name" value={this.state.name} onChange={this.handleChange} type="text" className="form-control" placeholder="Имя"/>
                        </div>
                        <div className="mb-3">
                            <input name="lastname" value={this.state.lastname} onChange={this.handleChange} type="text" className="form-control" placeholder="Фамилия"/>
                        </div>
                        <div className="mb-3">
                            <input name="email" value={this.state.email} onChange={this.handleChange} type="email" className="form-control" placeholder="E-mail (Логин)"/>
                        </div>
                        <div className="mb-3">
                            <input name="pass" value={this.state.pass} onChange={this.handleChange} type="password" className="form-control" placeholder="Пароль"/>
                        </div>
                        <p id="info" hidden>Такой пользователь уже есть</p>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary" value="Зарегистрироваться"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
