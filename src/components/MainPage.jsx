import React from 'react';
import {Link} from "react-router-dom";

function Tr(props){
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td><Link to={`/blog/${props.id}`}>{props.title}</Link></td>
            <td>{props.author}</td>
            <td><span>[удалить]</span></td>
        </tr>
    )
}

export class MainPage extends React.Component{
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        console.log("Вызван метод componentDidMount()");
        fetch("http://16.vozhzhaev.ru/php/handlerGetArticles.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let articles = [];
                for (let i = 0; i < result.length; i++) {
                    articles.push(<Tr
                        key={i}
                        index={i+1}
                        title={result[i].title}
                        author={result[i].author}
                        id={result[i].id}
                    />);
                }
                this.setState({
                    articles: articles
                })
            });
    }

    render() {
        console.log("Вызван метод render()");
        return (
            <div>
                <Link className="btn btn-primary" to="/addArticle">Добавить статью</Link>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Заголовок</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Управление</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.articles}
                    </tbody>
                </table>
            </div>
        )
    }
}
