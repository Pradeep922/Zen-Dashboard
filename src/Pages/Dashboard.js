import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Dashboard.css';
import {Link} from 'react-router-dom';


function Dashboard() {
  return (
    <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboardWrapper">
            <h2>Over View</h2>
            <h3>Completion: 60%/100%</h3>
            <ProgressBar now={60} />
        </div>
        <Link to ="/">Class</Link>
        <div className="dashboardActivites">
            <h3>Activaties</h3>
            <Container>
      <Row>
        <Col><div className="DashboardTopic">
            CodeKata
        </div>
        <div className="DashboardPoints">
            <span>Today:</span>
            <span>Total:</span>
        </div></Col>
        <Col><div className="DashboardTopic">
            WebKata
        </div>
        <div className="DashboardPoints">
            <span>Today:</span>
            <span>Total:</span>
        </div></Col>
      </Row>
      </Container>
            

        </div>
    </div>
    

  )
}

export default Dashboard