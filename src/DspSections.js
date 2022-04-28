import React, {useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'react-bootstrap';

//const addMsgs = (props) => {
////   const text = [];
//  if (props.msgs.length <= 1)
//    props.msgs.push(<div style="dv:last-child">{sampleMsg}</div>);
//  else
//    props.msgs.push(<div style="dv:last-child">props.message</div>);
//  return props.msgs;
//}

const DspSections = () => {
    
//   const messageEl = useRef(null);
  const msgs = new Array("");

  // addMsgs(msgs);
  // useEffect(() => {
  //   if (msgs) {
  //     msgs.current.addEventListener('DOMNodeInserted', event => {
  //       const { currentTarget: target } = event;
  //       target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
  //     });
  //   }
  // }, [])

  // useEffect(() => {
    // const addMsgs = (msgs) => {
//       setInterval(() => {
//         setMsgs(msgs);
//       }, 2000);
    // }
    // addMsgs(msgs);
    // }, []);

    return (
        <div>
        <Container class='container-fluid'>
            <Row className="show-grid">
                <div id="gsv" style={{height: 300}} className="col-sm-2 bg-dark border text-white">
                    GSV Container</div>
                <div id="rmc" style={{height: 300}} className="col-sm-5 bg-dark border text-white">
                    RMC container</div>
                <div id="gga" style={{height: 300}} className="col-sm-5 bg-dark border text-white">
                    GGA Container</div>
                <div id="gsa-pps" style={{height: 200}} className="col-sm-6 bg-dark border text-white">
                    GSA-PPS Container</div>
                <div id="gst" style={{height: 200}} className="col-sm-6 bg-dark border text-white">
                    GST Container</div>
            </Row>
            {/* <div id="msgscroll" style={{height: 200}} className="bg-dark border p4 text-white">
                <div className="messages">
                    {msgs.map((m, i) => <div key={i} className={`msgs${i}`}>{m}</div>)} 
                </div>
            </div>   */}
        </Container>
    </div>
    )
}
export default DspSections;