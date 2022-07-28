import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {Nav} from 'react-bootstrap';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <Nav defaultActiveKey="/temperature" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/temperature">Temperature</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/massa">Massa</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Massa</Nav.Link>
          </Nav.Item>
        </Nav>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
