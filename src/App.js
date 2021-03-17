import React from 'react';
import Dashboad from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
  
     <Container >
       <Row className="row-header">
       <Header></Header>   
       </Row>
       <Row className="row-main">
       <Dashboad></Dashboad>
       </Row>
       <Row className="row-footer">
       <Footer></Footer>
       </Row>
     </Container>

    </div>
   
  }
}
export default App;
