import React from "react";
import {host} from "../config";

export class Article extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "",
            content: ""
        }
    }
    componentDidMount() {
        const id = window.location.pathname.split("/")[2]; // Достаём идентификатор статьи их URL
        const formData = new FormData(); // formData - в него положим id для отправки на сервер
        formData.append('id',id); // кладём id в formData
        fetch(host+"/php/handlerGetArticleById.php",{
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result);
                this.setState({
                    title: result.title,
                    content: result.content
                })
            })
    }

    render() {
        return (
          <div>
              <h1 className="mb-5">{this.state.title}</h1>
              <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
          </div>
        );
    }
}
