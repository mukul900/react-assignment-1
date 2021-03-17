import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import News from '../../model/news'
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component{
    
    constructor()
    {
        super();
        this.news=new News();
        this.state={
            newsDescription:"",
            newsUrl:""
        }
        this.handleOnClick=this.handleOnClick.bind(this);
    }
    async addnews(news)
    {
        return fetch("http://localhost:3001/news",{
            method:"post",
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(news),
        }
    )};
     async handleOnClick(event)
    {
        this.newNews=new News();
        console.log('url='+this.props.articles.url);
        this.newNews.description=this.props.articles.description
        this.newNews.link=this.props.articles.url;
        this.addnews(this.newNews);
    }
    render(){        
        return (
            <div class="grid-container">
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={this.props.articles.urlToImage}/>          
            <Card.Body>
              <Card.Title >{this.props.articles.title}</Card.Title>
              <Card.Text>
                  {this.props.articles.author}
              </Card.Text>
              <Button variant="primary" type="submit" onClick={this.handleOnClick} >read later</Button>
            </Card.Body>
          </Card>
          </div>
        )
    }
}

export default Cards