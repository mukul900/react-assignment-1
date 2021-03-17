import React from 'react'
import CardDesk from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cards from '../card/Card'
class Dashboad extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            records: []
        }
        
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apikey=9a418d06a5bc4e85bf7c7fb8d23e93ae')
        .then(response => response.json())
        .then(records => {
          //  console.log(records)
             this.setState({
            records: records["articles"]
            })
        }).catch(error => console.log(error))
    }   

    render(){
        console.log(this.state.records)
        const articles = this.state.records.map((item,index) =>
        <Cards articles={item} key={index}></Cards>
    );
        return(
            <div>
            <h1>List Of Available Notes</h1>
            <CardDesk style={{width:'18rem', height:'18rem'}} content="width=device-width, initial-scale=1, shrink-to-fit=no">{articles}</CardDesk>

        </div>
        )
    }
}
export default Dashboad;