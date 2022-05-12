import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { builder } from '@builder.io/react';

// import serialport from 'serialport';
// import parser-readline from 'serialport';
// import GPS from 'gps';

// const SerialPort = require("serialport");
// const SerialPortParser = require("@serialport/parser-readline");
// const GPS = require("gps");
// const Request = require("request-promise");

// const port = new SerialPort("/dev/serial0", { baudRate: 9600 });
// const gps = new GPS();

// const parser = port.pipe(new SerialPortParser());
builder.init("d5f47214e7664037a7d7aab11d467bba");
if ("serial" in navigator) {
    console.log('awesome, we got serial');
} else { console.log('whoa-oh! No navigator -- RATS!!');}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App/>
);
