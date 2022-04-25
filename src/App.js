import React from 'react';
import { ReactDOM } from 'react-dom';
import logo4 from './logo4.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Alert,Breadcrumb,Card,Stack,Container,Grid,Row,Col } from 'react-bootstrap';
import DspSections from './DspSections';

const Box = props => <div className="box">{props.children} </div>;
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* The 'header-section' is dispalyed explicitly, so it can format across all page-space */}
        <img src={logo4} className="App-logo" alt="logo" />
        <Container>
          <Stack gap={2}>
            <div id="sathdr" className="bg-dark p2 border text-white">Satellite Header</div>
            <div id="timelatlon" className="bg-dark p2 border text-white">Satellite Time/Lat/Lon</div>
            <div id="sentencesrxd" className="bg-dark p2 border text-white">(Sentences)</div>
          </Stack>
        </Container>
        <DspSections/>
      </header>
    </div>
  );
}

export default App;