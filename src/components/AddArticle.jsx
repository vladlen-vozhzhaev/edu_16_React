import React from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {host} from "../config"; // Import Sun Editor's CSS File

export class AddArticle extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            author: ""
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.sunEditorRef = React.createRef();
    }
    handlerSubmit(event){
        event.preventDefault();
        //console.log(this.sunEditorRef.current.getContents());
        console.log("Статья отправлена на сервер");
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('content', this.sunEditorRef.current.getContents());
        formData.append('author', this.state.author);
        fetch(host+"/php/hendlerAddArticle.php", {
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.text())
            .then(result=>{console.log(result)});
    }
    handlerChange(event){
        const value = event.target.value;
        const name = event.target.name;
        console.log(name, value);
        this.setState({
            [name]: value
        })
    }
    getSunEditorInstance = (sunEditor) => {
        this.sunEditorRef.current = sunEditor;
    };

    render() {
        return (
        <div>
            <h1 className="text-center mb-3">Добавление статьи</h1>
            <div className="col-8 mx-auto">
                <form onSubmit={this.handlerSubmit}>
                    <div className="mb-3">
                        <input name="title" type="text" value={this.state.title} onChange={this.handlerChange} className="form-control" placeholder="Заголовок статьи"/>
                    </div>
                    <div className="mb-3">
                        <SunEditor
                            height="400px"
                            placeholder="Текст статьи"
                            getSunEditorInstance={this.getSunEditorInstance}
                            setOptions={{
                                buttonList : [
                                    ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                                    '/',
                                    ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                                    ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
                                ],
                            }}/>
                    </div>
                    <div className="mb-3">
                        <input name="author" value={this.state.author} onChange={this.handlerChange} type="text" className="form-control" placeholder="Автор"/>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-primary" value="Добавить статью"/>
                    </div>
                </form>
            </div>
        </div>
    )
    }


}
