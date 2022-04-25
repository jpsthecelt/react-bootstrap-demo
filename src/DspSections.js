import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Placeholder } from 'react-bootstrap';

const DspSections = () => {
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
            <div id="msgscroll" style={{height: 200}} className="bg-dark border p4 text-white">
                (scrolling messages)...</div>  
        </Container>
    </div>
    )
}
export default DspSections;