import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import "./styles.css";
import logo4 from './logo4.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack,Container} from 'react-bootstrap';
import DspSections from './DspSections';

// Component Messages will allow us to add message-divs to 
// our messagesWrapper container and number them, all-the-while
// keeping our focus on the last message.
const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div id="message-wrapper" style={{"text-align": "left"}} className="messagesWrapper  col-sm- bg-dark border text-white">
      {messages.map(message => (
        <span key={message}>{message}</span>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};


function App() {

const sampleMsgs = [
  "$GPRMC,044840.00,A,3401.21044,N,11824.67722,W,0.165,,010621,,,D*60",
  "$GPVTG,,T,,M,0.165,N,0.306,K,D*21",
  "$GPGGA,044840.00,3401.21044,N,11824.67722,W,2,07,1.34,29.5,M,-32.9,M,,0000*56",
  "$GPGSA,A,3,21,32,46,27,08,22,10,,,,,,3.07,1.34,2.76*0F",
  "$GPGSV,3,1,12,01,18,319,17,08,27,257,20,10,44,068,33,18,00,142,*73",
  "$GPGSV,3,2,12,21,39,313,23,22,20,296,14,23,16,089,,27,22,221,32*7A",
  "$GPGSV,3,3,12,31,28,168,20,32,70,025,31,46,49,199,30,51,49,161,*7E",
  "$GPGLL,3401.21044,N,11824.67722,W,044840.00,A,D*7F"
];

  // let us access the total number of messages and the messages themselves
  // also providing a way to append new messages to the wrapper
  const [messages, setMessages] = useState([]);
  const [msgCount, setmsgCount] = useState(1);
  const [msg, setMsg] = useState([<div>{sampleMsgs[0]}</div>]);

  const addMessages = () => {
    setMessages(m => [...m, '('+msgCount+') '+uuidv4()]);
    setmsgCount(msgCount + 1);
  };

  const SampleMsgFeed = () => {
    setMessages(m => [...m, '('+msgCount+') '+sampleMsgs[msgCount]]);
    setmsgCount((msgCount + 1) % 8);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo4} className="App-logo" alt="logo" />
        <Container>
          <Stack gap={2}>
            <div id="sathdr" className="bg-dark p2 border text-white">Satellite Header</div>
            <div id="timelatlon" className="bg-dark p2 border text-white">Satellite Time/Lat/Lon</div>
            <div id="sentencesrxd" className="bg-dark p2 border text-white">(Sentences)</div>
          </Stack>
          <DspSections/>
          <Messages messages={messages} />
        </Container>
        <button className="addButton" cannedMsg={sampleMsgs[0]} onClick={SampleMsgFeed}>('punch' me for generated message test)</button>
      </header>
    </div>
  );
}

export default App;
