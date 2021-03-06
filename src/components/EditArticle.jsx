import React from "react";
import {host} from "../config";

export class EditArticle extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            author: ""
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    // /edit/7
    componentDidMount() {
        const id = window.location.pathname.split('/')[2];
        const formData = new FormData();
        formData.append("id",id);
        fetch(host+"/php/handlerGetArticleById.php",{
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
               this.setState({
                   title: result.title,
                   content: result.content,
                   author: result.author
               })
            });
    }

    handlerChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handlerSubmit(event){
        event.preventDefault();
        const id = window.location.pathname.split('/')[2];
        const formData = new FormData();
        formData.append("id", id);
        formData.append("title", this.state.title);
        formData.append("content", this.state.content);
        formData.append("author", this.state.author);
        fetch(host+"/php/handlerUpdateArticleById.php",{
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
                <h1 className="text-center mb-3">Добавление статьи</h1>
                <div className="col-6 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input name="title" type="text" value={this.state.title} onChange={this.handlerChange} className="form-control" placeholder="Заголовок статьи"/>
                        </div>
                        <div className="mb-3">
                            <textarea name="content" value={this.state.content} onChange={this.handlerChange} className="form-control" placeholder="Текст статьи"/>
                        </div>
                        <div className="mb-3">
                            <input name="author" value={this.state.author} onChange={this.handlerChange} type="text" className="form-control" placeholder="Автор"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary" value="Сохранить"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
