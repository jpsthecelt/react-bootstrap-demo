import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { builder } from '@builder.io/react';

// Notice that this file layout was originally generated 'by hand', then 'tweaked a couple of times'
//    using builder.io and then revamped, again using builder.io import.
//    Additionally, the 'HTML to Figma chrome extension was utilized to capture what I had in the original site.

// Following are some additional features to be added as 'time permits':
//
// ***** VVV
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
// ***** ^^^
builder.init("d5f47214e7664037a7d7aab11d467bba");
if ("serial" in navigator) {
    console.log('awesome, we got serial');
} else { console.log('whoa-oh! No navigator -- RATS!!');}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App/>
);
